import {
  Component, OnInit, Renderer2, ViewChild,
  AfterViewInit, Input, ElementRef, Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements OnInit, AfterViewInit, OnChanges {

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
      return;
    }
    if (!!changes.pageSize) {
      if (!changes.pageSize.firstChange) {
        this.pageSize = changes.pageSize.currentValue;
        this.setPageList();
      }
      return;
    }
    if (!!changes.pageIndex) {
      if (!changes.pageIndex.firstChange) {
        this.pageIndex = changes.pageIndex.currentValue;
        this.setPageList();
      }
      return;
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
      this.render.addClass(this.dataTable.nativeElement.querySelector('thead'), 'fixed-head');
    }

    /**
     * 监听滚动条
     */
    fromEvent(this.dataTable.nativeElement.parentNode, 'scroll').subscribe(() => {
      this.setTableBoxShow();
    });
    this.setTableUI();
  }

  /**
   * ng-content发生变化时调用
   * @param event MutationRecord 变化的内容（ui中为$event）
   */
  onContentChange() {
    this.setTableUI();
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
    if (!!this.maxHeight) {
      for (const ele of dataThListDom) {
        this.render.setStyle(ele, 'z-index', 99);
      }
    }
    /** dataTable中tbody下的tr列表DOM */
    const dataTrListDom = this.dataTable.nativeElement.querySelector('tbody').children;
    // 添加css类，固定左边的列
    for (let i = 0; i < this.fixLeftNum; i++) {
      this.render.addClass(dataThListDom[i], 'sticky');
      this.render.setStyle(dataThListDom[i], 'left', letfWidthValue + 'px');
      this.render.setStyle(dataThListDom[i], 'z-index', 100);
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
        // this.render.setStyle(ele.children[dataThListDom.length - 1 - kk], 'z-index', kk + 1);
      }
      rightWidthValue += dataThListDom[dataThListDom.length - 1 - kk].offsetWidth;
    }
    this.setTableBoxShow();
  }

  /**
   * 设置阴影部分
  */
  setTableBoxShow() {
    /** dadtaTable中头部的th列表DOM */
    const dadtaThListDom = this.dataTable.nativeElement.querySelector('thead tr').children;
    /** dataTable中tbody下的tr列表DOM */
    const dataTrListDom = this.dataTable.nativeElement.querySelector('tbody').children;
    /** 处理左边阴影 */
    if (this.dataTable.nativeElement.parentNode.scrollLeft > 0) {
      for (let i = 0; i < this.fixLeftNum; i++) {
        if (i < this.fixLeftNum - 1) {
          this.render.addClass(dadtaThListDom[i], 'border-left-box-show');
        } else {
          this.render.addClass(dadtaThListDom[i], 'left-box-show');
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
        this.render.removeClass(dadtaThListDom[i], 'left-box-show');
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
        this.render.removeClass(dadtaThListDom[dadtaThListDom.length - 1 - kk], 'right-box-show');
        if (!!this.total) {
          for (const ele of dataTrListDom) {
            this.render.removeClass(ele.children[dadtaThListDom.length - 1 - kk], 'right-box-show');
          }
        }
      }
    } else {
      for (let kk = 0; kk < this.fixRightNum; kk++) {
        if (kk < this.fixRightNum - 1) {
          this.render.addClass(dadtaThListDom[dadtaThListDom.length - 1 - kk], 'border-right-box-show');
        } else {
          this.render.addClass(dadtaThListDom[dadtaThListDom.length - 1 - kk], 'right-box-show');
        }
        if (!!dataTrListDom.length) {
          for (const ele of dataTrListDom) {
            if (kk < this.fixRightNum - 1) {
              this.render.addClass(ele.children[dadtaThListDom.length - 1 - kk], 'border-right-box-show');
            } else {
              this.render.addClass(ele.children[dadtaThListDom.length - 1 - kk], 'right-box-show');
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
  }

}
