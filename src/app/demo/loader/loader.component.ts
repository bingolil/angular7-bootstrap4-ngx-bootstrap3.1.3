import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LoadService } from '../../utils/service/load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loadService:LoadService,private http:HttpClient) { }

  ngOnInit() {
  }

  httpQuest(){
  	this.loadService.loadStart('正在操作中 . . . .');
  }

  httpPo1(){
  	const aa=new HttpParams().set('title','正在获取数据').set('jj','bb');
  	this.http.post('/api/vm/list',null,{params:aa}).subscribe(data=>{
  		console.log(data);
  	})
  }

  httpPo2(){
  	this.http.get('/api/format',null).subscribe(data=>{
  		console.log(data);
  	})
  }

}
