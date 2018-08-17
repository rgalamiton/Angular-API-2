import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {BboardService} from '../shared/bboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bboard',
  templateUrl: './bboard.component.html',
  styleUrls: ['./bboard.component.css']
})
export class BboardComponent implements OnInit {

  constructor( private bboardService: BboardService, private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  resetForm(form : NgForm){
    form.reset();
    this.bboardService.selectedBboard = {
      id : null,
      title: '',
      location: '',
      events: '',
      description: '',
      image: '',
    }
  }
  onSubmit(form : NgForm){
    this.bboardService.postBboard(form.value)
    .subscribe( emp => {
      this.resetForm(form);
      this.toastr.success('New Record Added Successfully!', 'New Billboard');
    })
  }
}
