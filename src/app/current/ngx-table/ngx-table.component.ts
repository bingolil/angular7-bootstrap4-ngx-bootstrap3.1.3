import {
  Component, OnInit, Renderer2, ViewChild,
  AfterViewInit, Input, ElementRef, Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements OnInit, AfterViewInit, OnChanges {

  /** 存在数据时，重写头部的表格 */
  @ViewChild('headTable', { static: false }) headTable: ElementRef;
  /** 展示数据的表格 */
  @ViewChild('dataTable', { static: false }) dataTable: ElementRef;

  /** 父组件传入，左边固定的列数 */
  @Input() fixLeftNum = 0;
  /** 父组件传入，右边固定的列数 */
  @Input() fixRightNum = 0;
  /** table展示的最大高度，数据过多时，纵向滚动条 */
  @Input() maxHeight = 0;
  /** 数据总条数 */
  @Input() total = 0;
  /** 是否分页,默认分页 */
  @Input() pagination = true;
  /** 每页展示的条数 */
  @Input() size: number;
  /** 当前页数 */
  @Input() pageIndex = 1;
  /** 当前页的展示的条数 */
  @Input() pageSize = 10;

  /** 请求数据 */
  @Output() IndexChange = new EventEmitter();
  /** 请求数据 */
  @Output() SizeChange = new EventEmitter();

  /** 总页数 */
  totalPageNum: number;
  /** 表格底部展示的数据 */
  footerNumList: number[] = [];
  /** 是否展示纵向滚动条 */
  yOverflowAuto = false;
  /** 每页展示条数列表 */
  pageSizeList = [
    { val: 10, title: '10条/页' },
    { val: 20, title: '20条/页' },
    { val: 30, title: '30条/页' },
    { val: 50, title: '50条/页' }
  ];

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit() {
    if (!!this.maxHeight) {
      this.yOverflowAuto = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.pageSize && !!changes.pageIndex) {
      if (!changes.pageSize.firstChange && !changes.pageIndex.firstChange) {
        this.pageSize = changes.pageSize.currentValue;
        this.pageIndex = changes.pageIndex.currentValue;
        this.setPageList();
        return;
      }
    }
    if (!!changes.total) {
      if (!changes.total.firstChange) {
        this.setPageList();
      }
    }
    if (!!changes.pageSize) {
      if (!changes.pageSize.firstChange) {
        this.pageSize = changes.pageSize.currentValue;
        this.setPageList();
      }
    }
    if (!!changes.pageIndex) {
      if (!changes.pageIndex.firstChange) {
        this.pageIndex = changes.pageIndex.currentValue;
        this.setPageList();
      }
    }
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    /**
     * 存在表格的最大高度时，处理css加入最大高度样式
     */
    if (!!this.maxHeight) {
      this.render.setStyle(this.dataTable.nativeElement.parentNode, 'max-height', this.maxHeight + 'px');
    }

    this.setTableUI();

    /**
     * 监听滚动条
     */
    fromEvent(this.dataTable.nativeElement.parentNode, 'scroll').subscribe(() => {
      this.setTableBoxShow();
    });
  }

  onResized(event: ResizedEvent) {
    this.setTableUI();
  }

  testFun() {
  }

  /**
  * stick 布局，兼容了relative和absolute
  * 进行页面布局
  */
  setTableUI() {
    let letfWidthValue = 0;
    let rightWidthValue = 0;

    /** dataTable中头部的th列表DOM */
    const dataThListDom = this.dataTable.nativeElement.querySelector('thead tr').children;
    /** dataTable中tbody下的tr列表DOM */
    const dataTrListDom = this.dataTable.nativeElement.querySelector('tbody').children;

    const tableTdListWidth: number[] = [];
    // 添加css类，固定左边的列
    for (let i = 0; i < this.fixLeftNum; i++) {
      this.render.addClass(dataThListDom[i], 'sticky');
      this.render.setStyle(dataThListDom[i], 'left', letfWidthValue + 'px');
      if (!!this.total) { // 若存在数据
        for (const ele of dataTrListDom) {
          this.render.addClass(ele.children[i], 'sticky');
          this.render.setStyle(ele.children[i], 'left', letfWidthValue + 'px');
        }
      }
      letfWidthValue += dataThListDom[i].offsetWidth;
    }

    // 添加css类，固定右边的列
    for (let kk = 0; kk < this.fixRightNum; kk++) {
      this.render.addClass(dataThListDom[dataThListDom.length - 1 - kk], 'sticky');
      this.render.setStyle(dataThListDom[dataThListDom.length - 1 - kk], 'right', rightWidthValue + 'px');

      for (const ele of dataTrListDom) {
        this.render.addClass(ele.children[dataThListDom.length - 1 - kk], 'sticky');
        this.render.setStyle(ele.children[dataThListDom.length - 1 - kk], 'right', rightWidthValue + 'px');
        // 设置z-index，覆盖掉默认的z-index，让右边只展示一个阴影
        this.render.setStyle(ele.children[dataThListDom.length - 1 - kk], 'z-index', kk + 1);
      }
      rightWidthValue += dataThListDom[dataThListDom.length - 1 - kk].offsetWidth;
    }

    for (const thEle of dataThListDom) {
      tableTdListWidth.push(thEle.offsetWidth);
    }

    // 克隆dataTable的头部DOM
    const cacheTheadNode = this.dataTable.nativeElement.querySelector('thead').cloneNode(true);

    const cacheTHList = cacheTheadNode.querySelector('tr').children;
    // 固定headTable th的长度 table-layout:fixed
    for (let hh = 0; hh < cacheTHList.length; hh++) {
      this.render.setStyle(cacheTHList[hh], 'width', tableTdListWidth[hh] + 'px');
    }
    // 获取headTable的头部，判断是否有DOM
    const headTableHead = this.headTable.nativeElement.querySelector('thead');
    if (!!headTableHead) {
      this.render.removeChild(this.headTable.nativeElement, headTableHead);
    } // 每次都appendChild 因为stick的leift的值可能不一样
    this.render.appendChild(this.headTable.nativeElement, cacheTheadNode);
    // dataTable采用margin-top:-xxx隐藏掉头部，使用theadTable代替头部
    this.render.setStyle(this.dataTable.nativeElement, 'margin-top', -dataThListDom[0].offsetHeight + 'px');
    setTimeout(() => {
      this.setTableBoxShow();
    }, 0);
  }

  /**
   * 设置阴影部分
  */
  setTableBoxShow() {
    /** headTable中头部的th列表DOM */
    const headThListDom = this.headTable.nativeElement.querySelector('thead tr').children;
    /** dataTable中tbody下的tr列表DOM */
    const dataTrListDom = this.dataTable.nativeElement.querySelector('tbody').children;
    /** 处理左边阴影 */
    if (this.dataTable.nativeElement.parentNode.scrollLeft > 0) {
      for (let i = 0; i < this.fixLeftNum; i++) {
        if (i < this.fixLeftNum - 1) {
          this.render.addClass(headThListDom[i], 'border-left-box-show');
        } else {
          this.render.addClass(headThListDom[i], 'left-box-show');
        }
        if (!!this.total) {
          for (const ele of dataTrListDom) {
            if (i < this.fixLeftNum - 1) {
              this.render.addClass(ele.children[i], 'border-left-box-show');
            } else {
              this.render.addClass(ele.children[i], 'left-box-show');
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this.fixLeftNum; i++) {
        this.render.removeClass(headThListDom[i], 'left-box-show');
        if (!!this.total) {
          for (const ele of dataTrListDom) {
            this.render.removeClass(ele.children[i], 'left-box-show');
          }
        }
      }
    }

    /** 处理右边阴影 */
    if (
      this.dataTable.nativeElement.parentNode.offsetWidth
      + this.dataTable.nativeElement.parentNode.scrollLeft
      > this.dataTable.nativeElement.offsetWidth - 1
    ) { // 横向滚动条滚动到最右边
      for (let kk = 0; kk < this.fixRightNum; kk++) {
        this.render.removeClass(headThListDom[headThListDom.length - 1 - kk], 'right-box-show');
        if (!!this.total) {
          for (const ele of dataTrListDom) {
            this.render.removeClass(ele.children[headThListDom.length - 1 - kk], 'right-box-show');
          }
        }
      }
    } else {
      for (let kk = 0; kk < this.fixRightNum; kk++) {
        if (kk < this.fixRightNum - 1) {
          this.render.addClass(headThListDom[headThListDom.length - 1 - kk], 'border-right-box-show');
        } else {
          this.render.addClass(headThListDom[headThListDom.length - 1 - kk], 'right-box-show');
        }
        if (!!dataTrListDom.length) {
          for (const ele of dataTrListDom) {
            if (kk < this.fixRightNum - 1) {
              this.render.addClass(ele.children[headThListDom.length - 1 - kk], 'border-right-box-show');
            } else {
              this.render.addClass(ele.children[headThListDom.length - 1 - kk], 'right-box-show');
            }
          }
        }
      }
    }
  }

  /**
   * 改变页码
   * @param pageNum 目标页
   */
  changePageIndex(pageNum: number) {
    if (this.pageIndex === pageNum) {
      return;
    }
    const params = {
      pageIndex: pageNum,
      pageSize: this.pageSize
    };
    this.IndexChange.emit(params);
  }

  /**
   * 改变每页请求的条数
   * @param size 改变后的条数
   */
  changePageSize(size: number) {
    if (this.pageSize === size) {
      return;
    }

    const params = {
      pageIndex: 1,
      pageSize: size
    };
    this.SizeChange.emit(params);
  }

  /** 设置页码 */
  setPageList() {
    this.footerNumList = [];
    const cacheNum = this.total % this.pageSize > 0 ? 1 : 0;
    this.totalPageNum = Math.floor(this.total / this.pageSize) + cacheNum;
    if (this.totalPageNum <= 5) { // 若总页数小于等于最大展示的页数（默认5页）
      for (let i = 1; i <= this.totalPageNum; i++) {
        this.footerNumList.push(i);
      }
    } else { // 总页数大于默认展示页数
      const lastPage = this.totalPageNum; // 降低代码长度
      const theIndex = this.pageIndex; // 降低代码长度
      if (this.pageIndex <= 3) {
        this.footerNumList = [1, 2, 3, 4, 5];
      } else if (this.pageIndex > 3 && this.pageIndex < this.totalPageNum - 2) {
        this.footerNumList = [theIndex - 2, theIndex - 1, theIndex, theIndex + 1, theIndex + 2];
      } else {
        this.footerNumList = [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
      }
    }

    setTimeout(() => {
      this.setTableUI();
    }, 0);
    // this.setTableUI();

    /**
     * js是单线程的，浏览器内核是多线程的
     * 一个浏览器至少有3个线程（js引擎线程，GUI渲染线程，浏览器事件触发线程）
     * js引擎基于事件驱动单线程执行的，js一直等待任务队列中任务的到来，然后加以处理，浏览器不管什么时候都只有一个js程序在运行
     * GUI渲染线程负责渲染浏览器页面，GUI线程于js引擎互斥。js引擎执行时GUI被挂起，GUI更新后被保存到队列中，js空闲时执行
     */
  }

}
