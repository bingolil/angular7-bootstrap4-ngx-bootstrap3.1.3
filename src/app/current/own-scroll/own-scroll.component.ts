import { Component, OnInit, Input, OnDestroy, AfterContentChecked } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-own-scroll',
  templateUrl: './own-scroll.component.html',
  styleUrls: ['./own-scroll.component.css']
})
export class OwnScrollComponent implements OnInit, AfterContentChecked, OnDestroy{

  @Input() IdItemArr:Array<any>=[];

  IdOffsetTop: Array<any> = [];

  scrollId:string;

  constructor() { }

  ngOnInit() {
    this.scrollId = this.IdItemArr[0].id;

    window.onscroll = () => { //需要滚动监听
      let offsetTop = $(window).scrollTop();//页面顶部位置
      if (offsetTop > $('.wrapest').offset().top) { //页面顶部位置是否大于滚动导航位置
        $('div.wrap').addClass('fixed-page-nav');
      } else {
        $('div.wrap').removeClass('fixed-page-nav');
      }

      if (this.IdOffsetTop.length) {
        this.changeId(offsetTop)
      }
    }
  }

  ngAfterContentChecked() { //容器位置top是可以变化，因为在页面会有容器的隐藏和显示
    $('.wrapest').height($('div.wrap').height());//响应式存在时，重新设置组件的高度，去除滚动到组件时闪烁影响
    this.IdOffsetTop = []; //清除前一次数据
    this.IdItemArr.forEach((ele) => {
      if ($('#' + ele.id).length === 1) {
      	//做容错处理，即没有该id时
        this.IdOffsetTop.push({ off: $('#' + ele.id).offset().top - $('div.wrap').height() - 5, id: ele.id })
      } else {
        // console.log('滚动监听出错，滚动id锚点不存在或同名存在多个！！！')
      }
    })
  }

   ngOnDestroy(): void {//需要移除滚动监听事件
    window.onscroll=()=>{
      return;
    }
  }

  changeId(offsetTop) { //自动化设置页面锚点位置
    if (offsetTop < this.IdOffsetTop[1].off) { //第一Id
      this.scrollId = this.IdOffsetTop[0].id;
    }

    for (var j = 1; j < this.IdOffsetTop.length - 1; j++) { //自动化实现，中间Id
      if (offsetTop >= this.IdOffsetTop[j].off && offsetTop < this.IdOffsetTop[j + 1].off) {
        this.scrollId = this.IdOffsetTop[j].id;
      }
    }

    if (offsetTop >= this.IdOffsetTop[this.IdOffsetTop.length - 1].off) {//最后一个Id
      this.scrollId = this.IdOffsetTop[this.IdOffsetTop.length - 1].id;
    }

  }

  goToId(pid):boolean{
  	if ($('#' + pid).length !== 1) return false;//页面不存在该锚点
    $("html, body").animate({
      scrollTop: $("#" + pid).offset().top - $('.wrapest').height() 
      //兼容响应式时，容器高度是变化的
    }, { duration: 200, easing: "swing" });
    return false;
  }

}
