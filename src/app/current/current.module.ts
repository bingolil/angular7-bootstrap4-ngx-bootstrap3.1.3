import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnScrollComponent } from './own-scroll/own-scroll.component';
import { OwnSliderComponent } from './own-slider/own-slider.component';
import { LoadingContentComponent } from './loading-content/loading-content.component';

@NgModule({
  declarations: [OwnScrollComponent, OwnSliderComponent,LoadingContentComponent],
  imports: [
    CommonModule
  ],
  exports:[OwnScrollComponent, OwnSliderComponent, LoadingContentComponent],
  entryComponents:[LoadingContentComponent]
})
export class CurrentModule { }
