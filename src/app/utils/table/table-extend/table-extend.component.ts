import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-extend',
  templateUrl: './table-extend.component.html',
  styleUrls: ['./table-extend.component.css']
})
export class TableExtendComponent implements OnInit, OnChanges {

  @Input() rows:any;

  @Input() columns:Array<any>;

  @Input() isSelect:boolean=false;
  
  @Output() event=new EventEmitter();

  rowsObj = Object.keys;

  currentPage:number=1;

  page={
  	size:10,//展示多少条数据
  	index:0 //当前为第几页
  }

  pageSizeList=[
    {val:10,title:'10条/页'},
    {val:20,title:'20条/页'},
    {val:30,title:'30条/页'},
    {val:50,title:'50条/页'}
  ]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	// console.log(this.rows.data);
  	// console.log("A");
  }

  changePageSize(val){
  	// console.log(this.currentPage);
  	if(this.page.size===val) return;
  	// this.page.index=0;
  	// this.page.size=val;
  	// this.currentPage=1;
  	if(this.currentPage===1){
  		this.page.size=val;
  		this.event.emit(this.page);
  	}else{
  		// this.currentPage=3;
  		// this.testB();
  		// this.page.index=0;
  		// this.page.size=val;
  		// this.currentPage=this.page.index+1;
  		// this.event.emit(this.page);
  	}
  	// this.event.emit(this.page);
  	// console.log("C");
  }

  pageChanged(event?):void{
  	// console.log(this.currentPage);
  	this.page.index=event.page-1;
  	// this.page.index=this.currentPage+1;
  	this.event.emit(this.page);
  }

  testB(){
  	this.currentPage=1;
  	// this.pageChanged()
  	console.log(this.currentPage);
  }

}
