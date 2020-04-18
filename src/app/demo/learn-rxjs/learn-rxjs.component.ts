import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.css']
})
export class LearnRxjsComponent implements OnInit {

  public demoData: number[] = [];

  constructor(
  ) { }

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.demoData.push(i);
    }
  }

}
