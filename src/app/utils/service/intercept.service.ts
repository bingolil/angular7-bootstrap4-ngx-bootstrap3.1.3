import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(private loadService:LoadService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
  	let _loading_content=req.headers.getAll('loading'); //getAll返回的是一个数组
  	let _basic_content=`正在加载中 . . . .`;

  	if(_loading_content[0]!='true'){ //loading ui 开始
  		this.loadService.loadStart(_loading_content[0]);
  	}else if(_loading_content[0]=='true'){
  	  this.loadService.loadStart(_basic_content);
  	}else{
  		return next.handle(req); //不做操作
  	}
    //克隆http请求，去掉请求头部的loading数据
    let _clone_req=req.clone({headers:req.headers.delete('loading')});

  	return next.handle(_clone_req).pipe(mergeMap((event:any)=>{
      if(event instanceof HttpResponse){
        this.loadService.loadEnd();
      }
      return of(event)
  	}),catchError((res:HttpResponse<any>):Observable<any>=>{
      this.loadService.loadEnd();
      if(_loading_content[2]) console.log(_loading_content[2]);
      return of(event);
    }))
  }

}
