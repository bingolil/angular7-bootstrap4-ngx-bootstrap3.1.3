import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LoadingContentComponent } from '../../current/loading-content/loading-content.component';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
 
  public _load_modalRef;

  constructor(private modalService:BsModalService,private http:HttpClient) { }

  loadStart(content){
  	this._load_modalRef=this.modalService.show(LoadingContentComponent,{
  	  backdrop: 'static',
  	  class:'modal-sm loading-ui-wrap',
  	  initialState:{
  	  	basicContent:content
  	  }
  	})

  	setTimeout(()=>{
  	  this.loadEnd();
  	},2000)
  }

  loadEnd(){
  	this._load_modalRef.hide();
  }
}
