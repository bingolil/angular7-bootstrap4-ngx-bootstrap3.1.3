import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxEchartsModule } from 'ngx-echarts';

import { DemoRoutingModule } from './demo-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';
import { CurrentModule } from '../current/current.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BootSliderComponent } from './boot-slider/boot-slider.component';
import { ModalComponent } from './modal/modal.component';
import { ModalRefComponent } from './modal-ref/modal-ref.component';
import { LoaderComponent } from './loader/loader.component';
import { ChartComponent } from './chart/chart.component';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { Boot4FormUiComponent } from './boot4-form-ui/boot4-form-ui.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';

@NgModule({
  declarations: [
    LayoutComponent,
    RollingMonitorComponent,
    TooltipComponent,
    BootSliderComponent,
    ModalComponent,
    ModalRefComponent,
    LoaderComponent,
    ChartComponent,
    DemoTableComponent,
    Boot4FormUiComponent,
    LearnRxjsComponent
  ],
  imports: [
    CommonModule,
    CurrentModule,
    TooltipModule,
    NgxEchartsModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DemoRoutingModule
  ],
  entryComponents: [ModalRefComponent]
})
export class DemoModule { }
