import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnScrollComponent } from './own-scroll/own-scroll.component';
import { OwnSliderComponent } from './own-slider/own-slider.component';

@NgModule({
  declarations: [OwnScrollComponent, OwnSliderComponent],
  imports: [
    CommonModule
  ],
  exports:[OwnScrollComponent, OwnSliderComponent]
})
export class CurrentModule { }
