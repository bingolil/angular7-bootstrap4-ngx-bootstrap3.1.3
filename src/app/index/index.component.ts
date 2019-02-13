import { Component, OnInit } from '@angular/core';
 declare var $:any;
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  demoItems=[
    {url:'/demo/rolling-monitor',title:'滚动监听'},
    {url:'/demo/table-desc',title:'表格分页'},
    {url:'/demo/tooltip',title:'button disalbed时tooltip'},
    {url:'/demo/boot-slider',title:'滑动条'},
    {url:'/demo/modal',title:'modal 弹框'},
    {url:'/demo/loader',title:'loading http拦截UI展示'},
    {url:'/demo/loader',title:'优雅的http拦截器'},
    {url:'/demo/loader',title:'http请求结果动画'}
  ]

  constructor() { }

  ngOnInit() {

  }

}
