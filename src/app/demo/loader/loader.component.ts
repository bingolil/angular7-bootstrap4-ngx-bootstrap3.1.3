import { Component, OnInit, Input } from '@angular/core';
import { LoadService } from '../../utils/service/load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loadService:LoadService) { }

  ngOnInit() {
  }

  httpQuest(){
  	this.loadService.loadStart('正在操作中 . . . .');
  }

}
