import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  isOpen=false;
  isOpen2=false;
  isOpen3=false;
  toolStr="我是提示内容!"

  constructor() { }

  ngOnInit() {
  	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip(); 
	});
  }

  canUse(){
  	return false;
  }

}
