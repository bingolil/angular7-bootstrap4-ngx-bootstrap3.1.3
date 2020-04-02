import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const NGX_CHECKBOX_GROUP_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxCheckboxGroupComponent),
  multi: true
};

@Component({
  selector: 'app-ngx-checkbox-group',
  templateUrl: './ngx-checkbox-group.component.html',
  styleUrls: ['./ngx-checkbox-group.component.css'],
  providers: [NGX_CHECKBOX_GROUP_ACCESSOR]
})
export class NgxCheckboxGroupComponent implements ControlValueAccessor, OnInit {

  /** 可选列表，父组件传入 */
  @Input() checkboxList: any = [];
  /** 页面绑定的值的可选列表属性 */
  @Input() ngxValue: string;
  /** 页面展示的值的可选列表属性 */
  @Input() ngxDisplay: string;

  /** 表单需要的值 */
  valueList: any = [];
  /** checkbox的checked勾选情况 */
  checkedInfo: boolean[] = [];

  _onChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.checkboxList.length; i++) {
      this.checkedInfo.push(false); // 默认未勾选
    }
  }

  /**
   * 初始化写入值
   * @param value 初始值
  */
  writeValue(value: any) {
    if (value && value.length) {
      for (let i = 0; i < this.checkboxList.length; i++) {
        if (!!value.find(dd => !!this.ngxValue ? dd === this.checkboxList[i][this.ngxValue] : dd === this.checkboxList[i])) {
          this.checkedInfo[i] = true;
        }
      }
      this.valueList = value;
    } else {
      this.valueList = [];
    }
  }

  /** 值发生变化时，通知外部 */
  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
  }

  /**
   * checkbox 勾选发生变化
   * @param event checkbox变化事件
   * @param index checkbox变化的下标
   */
  changeItem(event, index: number) {
    const cacheChecedList = this.checkedInfo;
    cacheChecedList[index] = event.target.checked;
    this.valueList = [];
    for (let i = 0; i < cacheChecedList.length; i++) {
      if (cacheChecedList[i]) {
        this.valueList.push(!!this.ngxValue ? this.checkboxList[i][this.ngxValue] : this.checkboxList[i]);
      }
    }
    this._onChange(this.valueList);
  }

}

