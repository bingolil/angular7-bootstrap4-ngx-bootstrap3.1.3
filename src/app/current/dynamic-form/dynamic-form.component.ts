import { Component, OnInit, Input } from '@angular/core';
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
  /** 表单样式类 */
  @Input() formCssCalss = 'form-inline';
  /** ui页面绑定的表单 */
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.toFromGrop();
  }

  /** 将控件写入动态表单 */
  toFromGrop() {
    const group: any = {};
    this.controls.forEach(control => {
      group[control.key] = control.required ?
        new FormControl(control.value || '', Validators.required) :
        new FormControl(control.value);
    });
    this.form = new FormGroup(group);
  }

  onSubmit() {

  }

}
