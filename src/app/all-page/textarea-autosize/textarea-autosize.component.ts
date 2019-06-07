import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea-autosize',
  templateUrl: './textarea-autosize.component.html',
  styleUrls: ['./textarea-autosize.component.css']
})
export class TextareaAutosizeComponent implements OnInit {

  textValue: string;

  constructor() { }

  ngOnInit() {
    this.textValue = '测试初始值的换行啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊kkk测试初始值的换行啊啊啊啊啊啊啊啊啊a';
  }

}
