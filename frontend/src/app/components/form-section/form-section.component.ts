import { Component, OnInit } from '@angular/core';
import {Form} from '../../models/form.model'
import {AdminFormsService } from 'src/app/services/admin-form.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {
  
  forms  :Form[] = [];
  constructor(
    private adminformService:AdminFormsService
  ) { }

  ngOnInit(): void {
    this.adminformService.getForms()
    .subscribe(data =>{
      this.forms =data.contactForms;
    })
  }

}
