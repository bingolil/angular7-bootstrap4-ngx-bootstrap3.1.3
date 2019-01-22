import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalRefComponent } from '../modal-ref/modal-ref.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  bsModalRef1: BsModalRef
  bsModalRef2: BsModalRef

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  content: string = 'jj';

  openModel1(temp: TemplateRef<any>) {
    this.bsModalRef1 = this.modalService.show(temp);
  }

  openModel2() {
    const initialState = {
      content: this.content,
      title: 'Component modal头部'
    }
    this.bsModalRef2 = this.modalService.show(ModalRefComponent, { initialState });

    this.modalService.onHide.subscribe(data=>{
      console.log("AA");
    })
  }

}
