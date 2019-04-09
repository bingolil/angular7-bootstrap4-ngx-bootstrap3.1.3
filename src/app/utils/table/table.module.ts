import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

import { PageFooterExtendComponent } from './page-footer-extend/page-footer-extend.component';


@NgModule({
  declarations: [PageFooterExtendComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  exports: [PageFooterExtendComponent]
})
export class TableModule { }
