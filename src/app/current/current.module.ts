import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnScrollComponent } from './own-scroll/own-scroll.component';
import { OwnSliderComponent } from './own-slider/own-slider.component';
import { LoadingContentComponent } from './loading-content/loading-content.component';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';

@NgModule({
  declarations: [OwnScrollComponent, OwnSliderComponent,LoadingContentComponent, ConsoleMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[OwnScrollComponent, OwnSliderComponent, LoadingContentComponent,ConsoleMenuComponent],
  entryComponents:[LoadingContentComponent]
})
export class CurrentModule { }
