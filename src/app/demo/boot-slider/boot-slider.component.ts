import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-slider',
  templateUrl: './boot-slider.component.html',
  styleUrls: ['./boot-slider.component.css']
})
export class BootSliderComponent implements OnInit {

  min:number=1;
  max:number=100;
  unit:string='天';
  step:number=1;
  value:number=1;

  constructor() { }

  ngOnInit() {
  }

  getSliderValue(event){
  	this.value=event;
  }

  setValue(){
  	this.value=50;
  }

}
