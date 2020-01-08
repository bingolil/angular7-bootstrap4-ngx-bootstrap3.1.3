import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot4-form-ui',
  templateUrl: './boot4-form-ui.component.html',
  styleUrls: ['./boot4-form-ui.component.css']
})
export class Boot4FormUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // from(data).pipe(groupBy(x=>x.属性),mergeMap(dd=>dd.pipe(toArray()).pipe(map(y=>({key:dd.key,value:y})))))
  }

}
