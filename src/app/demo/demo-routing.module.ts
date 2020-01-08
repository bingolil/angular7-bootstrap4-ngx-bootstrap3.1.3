import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { RollingMonitorComponent } from './rolling-monitor/rolling-monitor.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BootSliderComponent } from './boot-slider/boot-slider.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { ChartComponent } from './chart/chart.component';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { Boot4FormUiComponent } from './boot4-form-ui/boot4-form-ui.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'table', component: DemoTableComponent },
      { path: 'rolling-monitor', component: RollingMonitorComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'boot-slider', component: BootSliderComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'loader', component: LoaderComponent },
      { path: 'boot4-form-ui', component: Boot4FormUiComponent },
      { path: 'learn-rxjs', component: LearnRxjsComponent },
      { path: 'echart', component: ChartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
