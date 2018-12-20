import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TableExtendComponent } from './table-extend/table-extend.component';


@NgModule({
  declarations: [TableExtendComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports:[TableExtendComponent]
})
export class TableModule { }
