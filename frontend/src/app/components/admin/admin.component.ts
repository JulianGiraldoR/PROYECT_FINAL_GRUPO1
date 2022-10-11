import { Component, Input, OnInit ,Output,EventEmitter } from '@angular/core';
import {User} from '../../models/user.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() user:User = {
    _id:"",
    name:"",
    email:"",
    password:"",
    role:"",
  }
  @Output() userAdded = new EventEmitter<User>()


  constructor() { }

  ngOnInit(): void {
  }

}
