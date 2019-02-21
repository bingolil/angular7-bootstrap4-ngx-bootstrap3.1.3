import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPageRoutingModule } from './all-page-routing.module';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { CurrentModule } from '../current/current.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [ConsoleMenuComponent, Error404Component],
  imports: [
    CommonModule,
    CurrentModule,
    AllPageRoutingModule
  ]
})
export class AllPageModule { }
