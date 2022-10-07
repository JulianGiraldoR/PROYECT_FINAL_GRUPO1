import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name:'',
    email:'',
    password:''
  }

  constructor(
    private authService:AuthService,
    private router:Router,
    
    ) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.user)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/login'])//redirecciona a la ruta Login si los datos son correctos
      },
      err=> console.log(err)
    )

  }

}
