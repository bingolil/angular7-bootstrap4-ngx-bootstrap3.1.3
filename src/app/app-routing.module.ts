import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'all-page',loadChildren:'./all-page/all-page.module#AllPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
