import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';
import { TableDescComponent } from './table-desc/table-desc.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BootSliderComponent } from './boot-slider/boot-slider.component';

const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children: [
			{ path: 'table', component: TableComponent },
			{ path: 'table-desc', component: TableDescComponent },
			{ path: 'rolling-monitor', component: RollingMonitorComponent },
			{ path: 'tooltip', component: TooltipComponent },
			{path:'boot-slider',component:BootSliderComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DemoRoutingModule { }
