import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-monitor',
  templateUrl: './rolling-monitor.component.html',
  styleUrls: ['./rolling-monitor.component.css']
})
export class RollingMonitorComponent implements OnInit {
  
  idItems=[
    {id:'demoA',title:'锚点A'},
    {id:'demoB',title:'锚点B'},
    {id:'demoC',title:'锚点C'},
    {id:'demoD',title:'锚点D'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
