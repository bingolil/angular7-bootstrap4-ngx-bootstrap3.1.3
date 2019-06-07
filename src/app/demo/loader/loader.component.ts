import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

import { LoadService } from '../../utils/service/load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  message: any = {
    message: {
      start: '开始',
      success: '成功',
      error: '失败'
    }
  };

  constructor(private loadService: LoadService, private http: HttpClient, private toastr: ToastrService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('angular http拦截UI结果一条龙');
  }

  showLoading() {
    this.loadService.loadStart('正在操作中 . . . .');
  }

  httpPo1() {
    const aat = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading': ['正在获取服务器列表', '获取成功', '获取失败']
    });

    this.http.post('https://localhost:8090/api/vm/list', 'tttttt', { headers: aat }).subscribe(data => {
      console.log(data);
    });
  }

  /** 正常的http请求 */
  getProduct() {
    const productHeader = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading': ['正在获取产品列表', '获取成功', '获取失败']
    });
    this.http.get('http://localhost:3000/product', { headers: productHeader }).subscribe(data => {
      console.log(data);
    });
  }

  /** 展示默认的http请求 */
  showModifyHttp() {
    this.http.get('http://localhost:3000/product', { headers: { loading: 'true' } }).subscribe(data => {
      console.log(data);
    });
  }

  /** 发生多给http请求 */
  happenHttps() {
    const cartHeader = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading': ['正在获取产品列表', '获取成功', '获取失败']
    });
    this.http.get('http://localhost:3000/product', { headers: cartHeader }).subscribe(data => {
      console.log(data);
    });

    const sss = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'loading': ['正在获取购物车信息', '获取成功', '获取失败']
    });

    this.http.get('http://localhost:3000/cart', { headers: sss }).subscribe(data => {
      console.log(data);
    });

  }

}
