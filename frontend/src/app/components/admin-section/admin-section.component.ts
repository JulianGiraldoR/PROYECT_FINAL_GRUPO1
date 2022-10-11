import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model'
import {AdminService} from '../../services/admin.service'

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  users:User[] = [];

  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getUsers()
    .subscribe(data =>{
      this.users = data.users
    })
  }

}
