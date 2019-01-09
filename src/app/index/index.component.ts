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
    {url:'/demo/tooltip',title:'button disalbed时tooltip'}
  ]

  constructor() { }

  ngOnInit() {

  }

}
