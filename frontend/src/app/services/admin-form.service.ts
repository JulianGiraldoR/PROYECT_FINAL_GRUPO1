import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '../models/form.model';
import { Observable } from 'rxjs';

interface getformData{
  contactForms:Form[];
}

@Injectable({
  providedIn: 'root'
})
export class AdminFormsService {

  constructor(
    private http:HttpClient
  ) { }

  getForms(){
    return this.http.get<getformData>('http://127.0.0.1:3002/api/forms/')
  }

 deleteForm(contactForms:Form):Observable<getformData>{
  let Option = {
    headers:new HttpHeaders({
      'Content-type':'application/json'
    }),
    body:contactForms
  }
  
  return this.http.delete<getformData>('http://127.0.0.1:3002/api/forms/',Option)
 }
}
