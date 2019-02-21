import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { Error404Component } from './error404/error404.component';
import { BeginUiComponent } from './begin-ui/begin-ui.component';

const routes: Routes = [
  {path:'',redirectTo:'console-menu',pathMatch:'full'},
  {path:'console-menu',component:ConsoleMenuComponent},
  {path:'error404',component:Error404Component},
  {path:'begin-ui',component:BeginUiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPageRoutingModule { }
