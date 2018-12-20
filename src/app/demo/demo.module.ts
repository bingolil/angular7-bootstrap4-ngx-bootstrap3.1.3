import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';
import { CurrentModule } from '../current/current.module';

@NgModule({
  declarations: [TableComponent, LayoutComponent, RollingMonitorComponent],
  imports: [
    CommonModule,
    CurrentModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
