import { Injectable, ChangeDetectorRef } from '@angular/core';
import { BsModalService, BsModalRef  } from 'ngx-bootstrap/modal';
import { Subscription, Observable, Subject } from 'rxjs';

import { LoadingContentComponent } from '../../current/loading-content/loading-content.component';

export class Ref_state {
  bool:boolean;
  _bs_Ref:BsModalRef
}

@Injectable({
  providedIn: 'root'
})
export class LoadService {
 
  private _load_Ref_Arr:BsModalRef[]=[];  //处理多个http请求
  private _load_Ref_bool:Boolean[]=[];    //对应是否移除modal_ref

  private count=0;

  private _shown$=new Subscription();
  private _hidden$=new Subscription();

  constructor(private modalService:BsModalService) { }

  loadStart(content){
    this._shown$=this.modalService.onShown.subscribe((r:string)=>{
      setTimeout(()=>{ //请求响应过快，modal_ref没有移除，进行二次移除
        if(this._load_Ref_bool[this.count]){
          this._load_Ref_Arr[this.count].hide();
         }
      },0)
      this._shown$.unsubscribe();
    })

    this._load_Ref_Arr[this.count]=this.modalService.show(LoadingContentComponent,{
      backdrop: 'static',
      animated:false,
      class:'modal-sm loading-ui-wrap',
      initialState:{
        basicContent:content
      }
    })
    this._load_Ref_bool[this.count]=false
    this.count++;
  }

  loadEnd(){
    this.count--;
    this._load_Ref_Arr[this.count].hide();
    this._load_Ref_bool[this.count]=true;
  }
}
