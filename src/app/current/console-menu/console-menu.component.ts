import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'my-console-menu',
  templateUrl: './console-menu.component.html',
  styleUrls: ['./console-menu.component.css']
})
export class ConsoleMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.do_console_menu();
  }

  do_console_menu(){
  	$(function(){
  	  $('.nav-item>a').on('click',function(){
        if (!$('.console-nav').hasClass('nav-mini')) {
          if ($(this).next().css('display') == "none") {
            //展开未展开
            $('.nav-item').children('ul').slideUp(300);
            $(this).next('ul').slideDown(300);
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
          }else{
          //收缩已展开
            $(this).next('ul').slideUp(300);
            $('.nav-item.nav-show').removeClass('nav-show');
          }
        }else{
          $('div.main-route').removeClass('main-zdmenu').addClass('main-default');
          $('.console-nav').removeClass('nav-mini');
          $(this).next('ul').slideDown(300);
          $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        }
      });

      $('#mini').on('click',function(){
        if (!$('.console-nav').hasClass('nav-mini')) {
          $('.nav-item.nav-show').removeClass('nav-show');
          $('.nav-item').children('ul').removeAttr('style');
          $('.console-nav').addClass('nav-mini');

          $('div.main-route').removeClass('main-default').addClass('main-zdmenu');
        }else{
          $('.console-nav').removeClass('nav-mini');

          $('div.main-route').removeClass('main-zdmenu').addClass('main-default');
        }
      });
  	});
  }
}
