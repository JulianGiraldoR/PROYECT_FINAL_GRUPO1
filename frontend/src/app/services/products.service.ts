import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product.model';



interface getProductData{
  products: Product[];
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 
  constructor(
    private http: HttpClient
    ) { }

  getProducts(){
    return this.http.get<getProductData>('http://127.0.0.1:3002/api/products/')
  }

}

