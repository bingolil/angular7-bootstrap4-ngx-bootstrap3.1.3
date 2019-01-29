import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-content',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.css']
})
export class LoadingContentComponent implements OnInit {

  @Input() basicContent='正在加载中 . . . .';

  constructor() { }

  ngOnInit() {
  }

}
