import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-footer-extend',
  templateUrl: './page-footer-extend.component.html',
  styleUrls: ['./page-footer-extend.component.css']
})
export class PageFooterExtendComponent implements OnInit, OnChanges {

  
  pageSizeList=[
    {val:10,title:'10条/页'},
    {val:20,title:'20条/页'},
    {val:30,title:'30条/页'},
    {val:50,title:'50条/页'}
  ]

  @Input() total=50356;

  @Input() index:number;

  @Input() size:number;

  // @Input() page={
  // 	index:0,
  // 	size:10
  // }

  page={
    index:0,
    size:10
  }

  @Input() maxSize=5;

  @Output() event=new EventEmitter();

  lastPageNmu:number;

  pageFooterNum:number[]=[];

  constructor() { }

  ngOnInit() {
    this.page.index=this.index;
    this.page.size=this.size;
  	this.setPageList();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.index && changes.index.currentValue!=0){
      return;
    }else{
      this.page.index=0;
      this.setPageList();
    }
   
  }

  changePageSize(val){
  	if(this.page.size===val) return;
  	this.page.size=val;
  	this.page.index=0;
    this.event.emit(this.page);
  	// this.setPageList();
  }

  changePage(val){
  	if(this.page.index==val) return;
  	this.page.index=val;
    this.event.emit(this.page);
    if(this.page.index!==0){
      this.setPageList();
    }
  }

  setPageList(){
    this.pageFooterNum=[];
  	let num=0;
  	if(this.total%this.page.size>0) num=1;
  	// let cachePageLength=Math.floor(this.total/this.page.size)+num;//总页数
  	this.lastPageNmu=Math.floor(this.total/this.page.size)+num;
  	let cachePageLength=this.lastPageNmu;//总页数
  	if(cachePageLength>this.maxSize){//总页数大于展示最多页数（默认为5）时
  		this.totalPagemin6(cachePageLength);
  	}else{//总页数小于等于5时
  		this.totalPagemax5(cachePageLength);
  	}
  }

  totalPagemax5(cachelen){ //页数为5页包括5页以下时
  	// this.pageFooterNum=[];
  	for(var i=0;i<cachelen;i++){
  		this.pageFooterNum.push(i);
  	}
  }

  totalPagemin6(cachelen){//页数为5页以上时
  	if(this.page.index<3){
  		// this.pageFooterNum=[];
	  	// for(var i=0;i<5;i++){
	  	// 	this.pageFooterNum.push(i);
	  	// }
      this.pageFooterNum=[0,1,2,3,4];
  	}else if(this.page.index>=3 && this.page.index<=cachelen-3){//当总页数大于5，当前页大于3时
  		this.middleMax5(this.page.index-2)
  	}else{//最后3页时,就使用当前pageFooterNum
  		this.pageFooterNum=[this.lastPageNmu-5,this.lastPageNmu-4,this.lastPageNmu-3,this.lastPageNmu-2,this.lastPageNmu-1];
  	}
  }

  middleMax5(num){
  	// this.pageFooterNum=[];
  	// for(var k=0;k<5;k++){
  	// 	this.pageFooterNum.push(num+k)
  	// }
    this.pageFooterNum=[num,num+1,num+2,num+3,num+4];
  }

}
