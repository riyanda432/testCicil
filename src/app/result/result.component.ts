import { Component, OnInit } from '@angular/core';
import {DataglobalService} from '../dataglobal.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  segmentGlobals: any[];

  constructor(private dataGlobal: DataglobalService) { }

  message:string;

  receiveMessage($event) {
    this.message = $event
    console.log(this.message)

  }
  ngOnInit() {
    this.segmentGlobals = this.dataGlobal.dateGlobal;
    console.log(this.segmentGlobals)
  }

}
