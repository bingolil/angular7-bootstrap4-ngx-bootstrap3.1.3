import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  nowPage={
    size:10,//展示多少条数据
    index:0 //当前为第几页
  }

  colAttr=[
    {title:'姓名'},
    {title:'学号'},
    {title:'年龄'},
    {title:'爱好'}
  ]

  dataObj:any;

  constructor(private mockDataService:MockDataService) { }

  ngOnInit() {
  	this.dataObj=this.mockDataService.getMockdata(this.nowPage);
  }

  getData(){
    this.dataObj=this.mockDataService.getMockdata(this.nowPage);
  }

  search(){
    this.nowPage.index=0;
    this.getData();
  }

  pageChange(event){
    this.nowPage=Object.assign(this.nowPage,event);
    this.getData();
  }

}
