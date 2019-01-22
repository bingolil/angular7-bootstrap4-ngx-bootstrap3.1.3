import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DemoRoutingModule } from './demo-routing.module';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';
import { CurrentModule } from '../current/current.module';
import { TableModule} from '../utils/table/table.module';
import { TableDescComponent } from './table-desc/table-desc.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BootSliderComponent } from './boot-slider/boot-slider.component';
import { ModalComponent } from './modal/modal.component';
import { ModalRefComponent } from './modal-ref/modal-ref.component';

@NgModule({
  declarations: [TableComponent, LayoutComponent, RollingMonitorComponent, TableDescComponent, TooltipComponent, BootSliderComponent, ModalComponent, ModalRefComponent],
  imports: [
    CommonModule,
    CurrentModule,
    TableModule,
    TooltipModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DemoRoutingModule
  ],
  entryComponents:[ModalRefComponent]
})
export class DemoModule { }
