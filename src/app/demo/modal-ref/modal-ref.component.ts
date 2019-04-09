import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'; //使用该引用会报错

@Component({
  selector: 'app-modal-ref',
  templateUrl: './modal-ref.component.html',
  styleUrls: ['./modal-ref.component.css']
})
export class ModalRefComponent implements OnInit {

  title = null;
  testValue = '';
  content = null;
  isCancel = false;

  constructor(public bsRef: BsModalRef) { }

  ngOnInit() { }

  changT() {
    this.testValue = '在modal中改变的值';
  }

  close() {
    this.bsRef.hide();
  }

  ok() {
    this.isCancel = true;
    this.bsRef.hide();
  }
}
