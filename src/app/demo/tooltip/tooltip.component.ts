import { Component, OnInit } from '@angular/core';

import { TooltipService } from '../../utils/service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  page={
  	con:true
  }

  constructor(private tooltipSelf:TooltipService) { }

  ngOnInit() {
  }

  consoleValue(){
  	console.log('Angular7');
  }

  getValue(){
  	return 'jackyy';
  }

 
}
