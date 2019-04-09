import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  nowPage = {
    size: 10, // 展示多少条数据
    index: 0  // 当前为第几页
  };

  checkedData = {};

  colAttr = [
    { title: '姓名' },
    { title: '学号' },
    { title: '年龄' },
    { title: '爱好' }
  ];

  dataObj: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataObj = this.mockDataService.getMockdata(this.nowPage);
  }

  search() {
    this.nowPage.index = 0;
    this.getData();
  }

  pageChange(event) {
    this.nowPage = Object.assign(this.nowPage, event);
    this.getData();
  }


  // 做全选======
  toggleAll(event) {
    _.forEach(this.dataObj.data, (item) => { this.checkedData[item.id] = event.target.checked; });
  }

  isAllChecked() { // 数据是否全选
    const isCan = !!this.dataObj.data && this.dataObj.data.length > 0;
    return isCan && _.reduce(this.dataObj.data, (result, item) => {
      return result && !!this.checkedData[item.id];
    }, true);
  }

  getCheckIds(): Array<any> {
    console.log(_.map(_.keys(_.pickBy(this.checkedData, v => v)), _.parseInt));
    return _.map(_.keys(_.pickBy(this.checkedData, v => v)), _.parseInt);
  }

}
