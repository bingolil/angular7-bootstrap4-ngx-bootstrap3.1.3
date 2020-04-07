import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(private loadService: LoadService, private toastrService: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const _loading_content = req.headers.getAll('loading'); // getAll返回的是一个数组
    const _basic_content = `正在加载中 . . . .`;
    if (!_loading_content) {
      return next.handle(req);
    }
    if (_loading_content[0] !== 'true') { // loading ui 开始
      this.loadService.loadStart(_loading_content[0]);
    } else if (_loading_content[0] === 'true') {
      this.loadService.loadStart(_basic_content);
    } else {
      return next.handle(req); // 不做操作
    }
    // 克隆http请求，去掉请求头部的loading数据
    const _clone_req = req.clone({ headers: req.headers.delete('loading') });

    return next.handle(_clone_req).pipe(mergeMap((event: any) => {
      if (event instanceof HttpResponse) {
        this.loadService.loadEnd();
        if (_loading_content[1]) {
          this.toastrService.success(_loading_content[1], null, {
            timeOut: 3000,
            closeButton: false,
            positionClass: 'toast-top-right'
          });
        }
      }
      return of(event);
    }), catchError((res: HttpResponse<any>): Observable<any> => {
      this.loadService.loadEnd();
      if (_loading_content[2]) {
        this.toastrService.error(_loading_content[2], null, {
          timeOut: 3000,
          closeButton: false,
          positionClass: 'toast-top-right'
        });
      }
      return of(res);
    }));
  }

}
