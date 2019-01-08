import { Component, OnInit } from '@angular/core';

import { TooltipService } from '../../utils/service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  page={
    Avalue:0,
    Bvalue:0,
    iterm2:false,
    iterm3:10
  }

  tooltipValue:string;

  tooltipValueArr={
    term1:'A的值需要大于B的值',
    term2:'checkbox需要处于选中状态',
    term3:'条件三中input框的值需要大于10'
  }

  constructor(private tooltipSelf:TooltipService) { }

  ngOnInit() {
  }

  consoleValue(){
    if(!!this.getValue()) return;
  	console.log('Angular7');
  }

  getValue(){
    let arr:Array<any>=[
      {bool:this.page.Bvalue>=this.page.Avalue,toolText:this.tooltipValueArr.term1},
      {bool:!this.page.iterm2,toolText:this.tooltipValueArr.term2},
      {bool:this.page.iterm3<=10,toolText:this.tooltipValueArr.term3}
    ];
    let result=this.tooltipSelf.tooltip(arr);
    return result;
  }

 
}
