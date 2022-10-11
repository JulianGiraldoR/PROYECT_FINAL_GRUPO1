import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';

interface getUserData{
  users:User[];
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(

    private http: HttpClient
  ) { }


  getUsers(){
    return this.http.get<getUserData>('http://127.0.0.1:3002/api/users/')
  
  }
}

