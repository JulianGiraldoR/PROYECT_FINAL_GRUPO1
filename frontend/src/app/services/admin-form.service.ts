import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/form.model';

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
}
