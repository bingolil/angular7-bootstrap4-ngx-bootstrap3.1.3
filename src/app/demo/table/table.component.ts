import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  page={
  	size:10,//展示多少条数据
  	index:1 //当前为第几页
  }

  pageSizeList=[
    {val:10,title:'10条/页'},
    {val:20,title:'20条/页'},
    {val:30,title:'30条/页'},
    {val:50,title:'50条/页'}
  ]

  changePageSize(val){
   this.page.size=val;
   this.page.index=1;
  }

  pageChanged(event):void{
    this.page.index=event.page;
    this.getData();
    // this.pagination.page=event.page;
    // this.event.emit(this.pagination);
  }

  total=537;

  colAttr=[
    {title:'姓名'},
    {title:'学号'},
    {title:'年龄'},
    {title:'爱好'}
  ]

  dataObj:any;

  search(){
    // console.log("A");
    // this.getData();
  }

  constructor(private mockDataService:MockDataService) { }

  ngOnInit() {
  	this.dataObj=this.mockDataService.getMockdata(this.page);
  }

  getData(){
    this.dataObj=this.mockDataService.getMockdata(this.page);
  }

  changePage(event){
  	this.dataObj=this.mockDataService.getMockdata(event);
  	// console.log(event);
  }

}
