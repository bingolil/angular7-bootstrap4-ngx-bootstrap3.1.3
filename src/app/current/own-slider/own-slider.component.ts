import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-own-slider',
  templateUrl: './own-slider.component.html',
  styleUrls: ['./own-slider.component.css']
})
export class OwnSliderComponent implements OnInit, OnChanges {
  
  @Input() min:number=0;    //滑动条最小值
  @Input() max:number=10;   //滑动条最大值
  @Input() step:number=1;   //每次移动的基值
  @Input() unit:string='Mbps';  //当前滑动对象的单位

  @Output() event=new EventEmitter();

  constructor() { }

  ngOnInit() {
  	$('#basic-demo').slider({formatter: (value)=> {
		return '当前为: ' + value+' '+this.unit;
	}}).on('slideStop', (event) => {
  	  // console.log(event);
    });

    this.resetBootSilde();
  }

  ngOnChanges(){
    this.resetBootSilde();
  }

  resetBootSilde(){
  	$("#basic-demo").slider('setAttribute', 'min', this.min); //添加滑动的峰值
    $("#basic-demo").slider('setAttribute', 'max', this.max); //添加滑动的峰值
    $("#basic-demo").slider('setAttribute', 'step', this.step); //添加滑动的基值
    $("#basic-demo").slider('setValue', this.min); //修改UI位置
  }



}
