import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseControl } from 'src/app/utils/class/form/base-control';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  // 动态表单
  /** 表单对象 */
  @Input() controls: BaseControl<any>[] = [];
  /** 向父组件发送表单值 */
  @Output() emitFormValue = new EventEmitter();
  /** ui页面绑定的表单 */
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.toFromGrop();
  }

  /** 将控件写入表单 */
  toFromGrop() {
    const group: any = {};
    this.controls.forEach(control => {
      group[control.key] = control.required ?
        new FormControl({ value: control.value || '', disabled: !!control.disabled }, Validators.required) :
        new FormControl({ value: control.value, disabled: !!control.disabled });
    });
    this.form = new FormGroup(group);
  }

  onSubmit() {
    this.emitFormValue.emit(this.form.value);
  }

}
