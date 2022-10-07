import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3002/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { 

    
  }
  //metodo para accede al backend en la ruta de register y login
  register(user:any){
    return this.http.post<any>(this.URL + '/register',user);
  }
  login(user:any){
    
    return this.http.post<any>(this.URL + '/login',user);
  }

  //metodo para saber si un usuario esta logged
  loggedIn(){
    return !!localStorage.getItem('token');//valida si en local storage hay un token para validar y retorna un true o false 
    }

   getToken() {

    return localStorage.getItem('token')
   }
   logout(){
    (confirm('You are Logout succesfull'))
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
   }

  }


