import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Form } from '../../models/form.model';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormsComponent implements OnInit {

  @Input() form: Form = {
    _id:"",
    name:"",
    email:"",
    cellNumber:"",
    subject:"",
    text:"", 
  }

  @Output() formAdded = new EventEmitter<Form>()

  constructor(
    
  ) { }

  ngOnInit(): void {
   
    
  }

}
