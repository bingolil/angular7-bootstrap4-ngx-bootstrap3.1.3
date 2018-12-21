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
  	this.dataObj=this.mockDataService.getMockdata(this.page);
  	// console.log(this.rows);
  }

  changePage(event){
  	this.dataObj=this.mockDataService.getMockdata(event);
  	// console.log(event);
  }

}
