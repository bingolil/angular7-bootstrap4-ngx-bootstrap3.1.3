import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-extend',
  templateUrl: './table-extend.component.html',
  styleUrls: ['./table-extend.component.css']
})
export class TableExtendComponent implements OnInit {

  @Input() rows:Array<any>;

  @Input() columns:Array<any>;
  
  @Output() event=new EventEmitter();
  
  page={
  	size:10,//展示多少条数据
  	index:0 //当前为第几页
  }

  total:number=1235;

  pageSizeList=[
    {val:10,title:'10条/页'},
    {val:20,title:'20条/页'},
    {val:30,title:'30条/页'},
    {val:50,title:'50条/页'}
  ]

  constructor() { }

  ngOnInit() {
  }

  changePageSize(val){
  	this.page.size=val;
  }

  pageChanged(event):void{
  	console.log(event);
  }

}
