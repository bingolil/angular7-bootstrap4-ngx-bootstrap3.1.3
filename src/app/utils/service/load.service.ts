import { Injectable, ChangeDetectorRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription, combineLatest,ReplaySubject } from 'rxjs';

import { LoadingContentComponent } from '../../current/loading-content/loading-content.component';


@Injectable({
  providedIn: 'root'
})
export class LoadService {
 
  public _load_modalRef:BsModalRef;

  public count=0;

  private _done = new ReplaySubject(1);

  private _isShown:boolean=false;

  private shownSubscription=new Subscription();

  constructor(private modalService:BsModalService,private http:HttpClient) { }

  loadStart(content){
    this.count++;

    // this.shownSubscription=this.modalService.onShown.subscribe(((s:string)=>{ //是否关闭
    //   console.log('shown',this._load_modalRef,this)
    //    // this._load_modalRef.hide();
    //   // if(this.count<=0){
    //   //   // this.count--;
    //   //   this._load_modalRef.hide();
    //   // }
    //   this.shownSubscription.unsubscribe();
    //   this._isShown = true;

    // }).bind(this));

    this.modalService.onShown.subscribe((r:string)=>{
      console.log("AAAAAA");
      console.log(this._load_modalRef)
    })

    console.log('show staring');

  	this._load_modalRef=this.modalService.show(LoadingContentComponent,{
  	  backdrop: 'static',
  	  class:'modal-sm loading-ui-wrap',
  	  initialState:{
  	  	basicContent:content
  	  }
  	});

    this._done.subscribe(()=>{
      console.log('done', this._load_modalRef);
      this._load_modalRef.hide();
    });


    this.modalService.onHidden.subscribe((reason: string) => {
      // console.log(this._load_modalRef);
      // this._load_modalRef=null;
    });
  }

  loadEnd(){
    console.log('loadEnd', this._load_modalRef);
    this.count--;

    this._done.next(true);
    this._done.complete();

    // this._load_modalRef.hide();
    //console.log(this.count);

    // this.modalService.onShown.subscribe(data=>{
    //   console.log("A");
    //   this._load_modalRef.hide();
    // })
  }


  // 存在多个拦截loading UI的情况
}
