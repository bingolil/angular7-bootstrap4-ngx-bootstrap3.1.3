import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('angular boot-slider自定义样式设计');
  }

  getSliderValue(event){
  	this.value=event;
  }

  setValue(){
  	this.value=50;
  }

}
