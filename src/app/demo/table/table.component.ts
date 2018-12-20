import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rowAttr=[
    {title:'姓名'},
    {title:'学号'},
    {title:'年龄'},
    {title:'爱好'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
