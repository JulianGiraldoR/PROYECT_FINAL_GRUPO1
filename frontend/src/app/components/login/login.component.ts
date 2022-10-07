import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email:'',
    password:''
  }
  constructor(
private authService: AuthService,
private router: Router

  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token',res.token);//guardo el token que me envia en el localstorage
        this.router.navigate (['/products']);//redirecciona a la ruta product-private


      },
      err => console.log(err)
  
      
    )
  }

}
