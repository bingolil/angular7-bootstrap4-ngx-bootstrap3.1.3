import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

declare var $:any;
import * as _ from 'lodash';

@Component({
  selector: 'app-own-slider',
  templateUrl: './own-slider.component.html',
  styleUrls: ['./own-slider.component.css']
})
export class OwnSliderComponent implements OnInit, OnChanges {
  
  @Input() min:number=0;    //滑动条最小值
  @Input() max:number=10;   //滑动条最大值
  @Input() step:number=1;   //每次移动的基值
  @Input() unit:string='';  //当前滑动对象的单位
  @Input() value:number;

  @Output() event=new EventEmitter();

  constructor() { }

  ngOnInit() {
  	$('#basic-demo').slider({formatter: (value)=> {
		  return '当前为: ' + value+' '+this.unit;
	  }}).on('slideStop', (event) => {
      this.event.emit(event.value);
    });

    this.resetBootSilde();
  }

  ngOnChanges(changes: SimpleChanges){
    _.forEach(changes,ele=>{
      if(!ele.firstChange){
        this.resetBootSilde();
        return;
      }
    })
  }

  resetBootSilde(){
  	$("#basic-demo").slider('setAttribute', 'min', this.min); //添加滑动的峰值
    $("#basic-demo").slider('setAttribute', 'max', this.max); //添加滑动的峰值
    $("#basic-demo").slider('setAttribute', 'step', this.step); //添加滑动的基值
    $("#basic-demo").slider('setValue', this.value); //修改UI位置
  }
}
