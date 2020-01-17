import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnScrollComponent } from './own-scroll/own-scroll.component';
import { OwnSliderComponent } from './own-slider/own-slider.component';
import { LoadingContentComponent } from './loading-content/loading-content.component';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  declarations: [
    OwnScrollComponent,
    OwnSliderComponent,
    LoadingContentComponent,
    NgxTableComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutosizeModule,
    ObserversModule
  ],
  exports: [
    OwnScrollComponent,
    OwnSliderComponent,
    LoadingContentComponent,
    NgxTableComponent,
    DynamicFormComponent
  ],
  entryComponents: [LoadingContentComponent]
})
export class CurrentModule { }
