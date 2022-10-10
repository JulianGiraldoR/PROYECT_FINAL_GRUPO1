import {FormsService} from '../../services/form.service'
import {Router} from '@angular/router'
import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm = {
    name:"",
    email:"",
    cellNumber:"",
    subject:"",
    text:"",
  }

  constructor(
    private FormsService:FormsService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  forms(){
    this.FormsService.forms(this.contactForm)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/products'])//redirecciona a la ruta product-private
      },
      err=> console.log(err)
    )
  }
  

}
