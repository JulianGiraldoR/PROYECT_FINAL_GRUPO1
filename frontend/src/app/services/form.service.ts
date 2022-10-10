import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'




@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private URL = 'http://localhost:3002/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { 

    
  }
  
  forms(Form:any){
    return this.http.post<any>(this.URL + '/forms',Form);
  }
}

