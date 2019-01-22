import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'; //使用该引用会报错

@Component({
  selector: 'app-modal-ref',
  templateUrl: './modal-ref.component.html',
  styleUrls: ['./modal-ref.component.css']
})
export class ModalRefComponent implements OnInit {

  title: string;
  content: any[] = [];

  constructor(public bsRef:BsModalRef) {
  }
 
  ngOnInit() {
  }

  close(){
    this.bsRef.hide();
  }
}
