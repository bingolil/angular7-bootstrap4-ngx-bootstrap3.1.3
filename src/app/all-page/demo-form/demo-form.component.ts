import { Component, OnInit } from '@angular/core';
import { BaseControl } from 'src/app/utils/class/form/base-control';
import { InputText } from 'src/app/utils/class/form/input-text';
import { TextArea } from 'src/app/utils/class/form/text-area';
import { RadioGroup } from 'src/app/utils/class/form/radio-group';
import { SelectDropdown } from 'src/app/utils/class/form/select-dropdown';
import { CheckboxGroup } from 'src/app/utils/class/form/checkbox-group';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  controls: BaseControl<any>[] = [
    new InputText({
      placeholder: '用户名',
      label: '姓名',
      value: '张三',
      readonly: true,
      key: 'userName'
    }),
    new RadioGroup({
      label: '性别',
      value: '1',
      key: 'sex',
      radioList: [
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ]
    }),
    new SelectDropdown({
      label: '学历',
      value: '', // 初始值
      key: 'education',
      options: [
        { label: '一本', value: '1' },
        { label: '二本', value: '2' }
      ]
    }),
    new CheckboxGroup({
      label: '天赋',
      value: ['swin'],
      key: 'talent',
      ngxDisplay: 'label',
      ngxValue: 'value',
      checkboxList: [
        { label: '游泳', value: 'swin' },
        { label: '画画', value: 'draw' }
      ]
    }),
    new TextArea({
      placeholder: '请填写备注，最多120字',
      rows: 3,
      label: '备注',
      key: 'desc'
    })
  ];

  constructor() { }

  ngOnInit() {
  }

  getValue(event) {
    console.log(event);
  }

}
