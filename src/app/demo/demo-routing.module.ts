import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';

const routes: Routes = [
  {
  	path:'',component:LayoutComponent,
  	children:[
  	  {path:'table',component:TableComponent},
  	  {path:'rolling-monitor',component:RollingMonitorComponent}
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
