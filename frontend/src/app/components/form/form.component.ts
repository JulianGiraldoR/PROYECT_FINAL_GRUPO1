import { Component, OnInit } from '@angular/core';
import {FormService} from '../../services/form.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm = {
    name:'',
    email:'',
    cellNumber:'',
    subject:'',
    text:''
  }

  constructor(
    private FormService:FormService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  form(){
    this.FormService.form(this.contactForm)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/products'])//redirecciona a la ruta product-private
      },
      err=> console.log(err)
    )
  }
  

}
