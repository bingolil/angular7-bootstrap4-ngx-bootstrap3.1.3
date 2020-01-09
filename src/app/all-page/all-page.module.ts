import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllPageRoutingModule } from './all-page-routing.module';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { CurrentModule } from '../current/current.module';
import { RouteLoadingComponent } from './route-loading/route-loading.component';
import { TextareaAutosizeComponent } from './textarea-autosize/textarea-autosize.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  declarations: [
    ConsoleMenuComponent,
    RouteLoadingComponent,
    TextareaAutosizeComponent,
    DemoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrentModule,
    AutosizeModule,
    ReactiveFormsModule,
    AllPageRoutingModule
  ]
})
export class AllPageModule { }
