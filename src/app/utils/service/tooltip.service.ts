import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

   tooltip(arr:Array<any>){
   	let toolText=null;
   	for(var i=0;i<arr.length;i++){
   		if(arr[i].bool){
   			toolText=arr[i].toolText;
   			break;
   		}
   	}
  	return toolText;
  }

}
