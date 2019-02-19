import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPageRoutingModule } from './all-page-routing.module';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { CurrentModule } from '../current/current.module';

@NgModule({
  declarations: [ConsoleMenuComponent],
  imports: [
    CommonModule,
    CurrentModule,
    AllPageRoutingModule
  ]
})
export class AllPageModule { }
