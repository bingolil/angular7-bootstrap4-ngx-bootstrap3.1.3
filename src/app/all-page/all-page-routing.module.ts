import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleMenuComponent } from './console-menu/console-menu.component';

const routes: Routes = [
  {path:'',redirectTo:'console-menu',pathMatch:'full'},
  {path:'console-menu',component:ConsoleMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPageRoutingModule { }
