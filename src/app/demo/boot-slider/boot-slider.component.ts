import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boot-slider',
  templateUrl: './boot-slider.component.html',
  styleUrls: ['./boot-slider.component.css']
})
export class BootSliderComponent implements OnInit {

  min = 1;
  max = 100;
  unit = '天';
  step = 1;
  value = 1;

  constructor(private title: Title) {
  }

  ngOnInit() {
    sessionStorage.setItem('key', 'value');
    console.log(sessionStorage.getItem('key'));
    this.title.setTitle('angular boot-slider自定义样式设计');
  }

  getSliderValue(event) {
    this.value = event;
  }

  setValue() {
    this.value = 50;
  }

}
