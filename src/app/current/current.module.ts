import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnScrollComponent } from './own-scroll/own-scroll.component';

@NgModule({
  declarations: [OwnScrollComponent],
  imports: [
    CommonModule
  ],
  exports:[OwnScrollComponent]
})
export class CurrentModule { }
