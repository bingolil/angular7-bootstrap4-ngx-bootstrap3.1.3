import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {

  demoData: Array<any> = [];
  total = 0;

  pageIndex = 1;
  pageSize = 10;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.searchData({ pageIndex: 1, pageSize: 10 });
  }

  searchData(params: { pageIndex: number, pageSize: number }) {
    const start = params.pageSize * (params.pageIndex - 1);
    this.http.get(`http://localhost:3000/demo-product?_start=${start}&_limit=${params.pageSize}`).subscribe((res: any) => {
      this.demoData = res;
      this.pageIndex = params.pageIndex;
      this.pageSize = params.pageSize;
      this.total = 66;
    });
  }

}
