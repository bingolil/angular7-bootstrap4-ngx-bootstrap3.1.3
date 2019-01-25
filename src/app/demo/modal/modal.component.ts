import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs'

import { ModalRefComponent } from '../modal-ref/modal-ref.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  bsModalRef1: BsModalRef;
  bsModalRef2: BsModalRef;
  bsModalRef3: BsModalRef;
  subscription: Subscription;

  testValue = "在原组件中定义的值"

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModel1(temp: TemplateRef<any>) {
    this.bsModalRef1 = this.modalService.show(temp);
  }

  openModel2() {
    const initialState = {
      content: 'initiaState内容',
      testValue: this.testValue,
      title: 'Component modal头部'
    }
    this.bsModalRef2 = this.modalService.show(ModalRefComponent, { initialState });
    this.subscription = this.modalService.onHidden.subscribe((s: string) => {
      if (this.bsModalRef2.content.isCancel) {// this.bsModalRef2.content  //弹框组件的引用
        console.log("取消");
      } else {
        console.log("确定");
      }
      this.subscription.unsubscribe(); //取消当前订阅
    });
  }

  openModel3(temp: TemplateRef<any>) {
    this.bsModalRef3=this.modalService.show(temp,Object.assign({},{class:'modal-lg'}))
  }

}
