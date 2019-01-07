import { Component, OnInit } from '@angular/core';

import { TooltipService } from '../../utils/service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor(private tooltipSelf:TooltipService) { }

  ngOnInit() {
  }

}
