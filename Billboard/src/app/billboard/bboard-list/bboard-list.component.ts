import { Component, OnInit } from '@angular/core';

import {BboardService} from '../shared/bboard.service';

@Component({
  selector: 'app-bboard-list',
  templateUrl: './bboard-list.component.html',
  styleUrls: ['./bboard-list.component.css']
})
export class BboardListComponent implements OnInit {

  constructor( private bboardService : BboardService) { }

  ngOnInit() {
    
  }

}
