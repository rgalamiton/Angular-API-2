import { Component, OnInit } from '@angular/core';

import {BboardService} from './shared/bboard.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
  providers: [BboardService]
})
export class BillboardComponent implements OnInit {

  constructor( private bboardService : BboardService) { }

  ngOnInit() {
  }

}
