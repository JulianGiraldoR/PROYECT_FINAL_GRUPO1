import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  products:Product[] = [];

  constructor(
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(data =>{
      this.products = data.products;
    })
  }

}
