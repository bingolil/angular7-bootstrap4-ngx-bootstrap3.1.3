import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpParams } from '@angular/common/http';
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
  	// console.log(req.url);
  	// if(this._not_intercept(req.url)) return next.handle(req);
  	if(this._not_intercept(req.url)){
  	  return next.handle(req);
  	}

  	// req=this._deleteParams(req);
  	req=this._deleteParams(req);

  	// this.loadService.loadStart('test');
  	return next.handle(req).pipe(mergeMap((event:any)=>{
  	  return of(event);
  	}))
  }

  // 不拦截的url 正则表达式
  private _not_intercept_url_regx=/\/api\/format|\/api\/userInfo/;

  private _not_intercept(url){
  	if(!_.isRegExp(this._not_intercept_url_regx)){
  	  console.log('拦截http正则写法错误');
  	}
  	return this._not_intercept_url_regx.test(url);
  }

  private _deleteParams(req:HttpRequest<any>){
  	console.log(req);
  	let content= req.params.get('value') || '正在加载中 . . . .';
  	this.loadService.loadStart(content);

  	// req.params=req.params.delete('title');
  	// new HttpParams(req.params.delete('title'))
  	// req.params.set(req.params.delete('title'))
  	// console.log(req.params.get('title'))
  	console.log(req.params);

  	return req;
  }

}
