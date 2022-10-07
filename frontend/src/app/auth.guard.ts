import { Injectable } from '@angular/core';
import { CanActivate  } from '@angular/router';
import {AuthService } from './services/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//auth guard protege rutas desde el front
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}


//funcion para ver si un token existe o no
  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;// si existe token redirecciona a la ruta que se quiere mostrar
    }
    this.router.navigate(['/login']);// si no hay token redirecciona a la ruta de login
    return false;

  }
    
  
  
}
