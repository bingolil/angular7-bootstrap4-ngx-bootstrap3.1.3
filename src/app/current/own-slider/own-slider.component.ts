import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-own-slider',
  templateUrl: './own-slider.component.html',
  styleUrls: ['./own-slider.component.css']
})
export class OwnSliderComponent implements OnInit, OnChanges {

  @Input() min = 0;    // 滑动条最小值
  @Input() max = 10;   // 滑动条最大值
  @Input() step = 1;   // 每次移动的基值
  @Input() unit = '';  // 当前滑动对象的单位
  @Input() value = 0;

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $('#basic-demo').slider({
      formatter: (value) => {
        return '当前为: ' + value + ' ' + this.unit;
      }
    }).on('slideStop', (event) => {
      this.event.emit(event.value);
    });

    this.resetBootSilde();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.value && !changes.value.firstChange) {
      this.resetBootSilde();
    }
  }

  resetBootSilde() {
    $('#basic-demo').slider('setAttribute', 'min', this.min);  // 添加滑动的峰值
    $('#basic-demo').slider('setAttribute', 'max', this.max);  // 添加滑动的峰值
    $('#basic-demo').slider('setAttribute', 'step', this.step);  // 添加滑动的基值
    $('#basic-demo').slider('setValue', this.value);  // 修改UI位置
  }
}
