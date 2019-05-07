import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';

import { AllPageRoutingModule } from './all-page-routing.module';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { CurrentModule } from '../current/current.module';
import { Error404Component } from './error404/error404.component';
import { BeginUiComponent } from './begin-ui/begin-ui.component';
import { RouteLoadingComponent } from './route-loading/route-loading.component';
import { TextareaAutosizeComponent } from './textarea-autosize/textarea-autosize.component';

@NgModule({
  declarations: [ConsoleMenuComponent, Error404Component, BeginUiComponent, RouteLoadingComponent, TextareaAutosizeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrentModule,
    AutosizeModule,
    AllPageRoutingModule
  ]
})
export class AllPageModule { }
