import { Component, OnInit } from '@angular/core';
 declare var $:any;
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  demoItems=[
    {url:'/demo/rolling-monitor',title:'滚动监听'},
    {url:'/demo/table-desc',title:'表格分页'}
  ]

  constructor() { }

  ngOnInit() {
    // With JQuery 使用JQuery 方式调用
$('#ex1').slider({
    formatter: function (value) {
        return 'Current value: ' + value;
    }
}).on('slide', function (slideEvt) {
    //当滚动时触发
    //console.info(slideEvt);
    //获取当前滚动的值，可能有重复
    // console.info(slideEvt.value);
}).on('change', function (e) {
    //当值发生改变的时候触发
    //console.info(e);
    //获取旧值和新值
    console.info(e.value.oldValue + '--' + e.value.newValue);
});
  }

}
