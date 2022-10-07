import { Component, OnInit } from '@angular/core';
import {PrivateProductsService} from '../../services/private-products.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-private-products',
  templateUrl: './private-products.component.html',
  styleUrls: ['./private-products.component.css']
})
export class PrivateProductsComponent implements OnInit {

  product = {
    title:'',
    description:'',
    category:'',
    origin:'',
    ingredients:'',
    imgUrl:''
  }

  constructor(
    private PrivateProductsService:PrivateProductsService,
    private router:Router,
  ) { }

  ngOnInit(): void { 

  }

    privateProduct(){
    this.PrivateProductsService.privateProduct(this.product)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/products'])//redirecciona a la ruta product-private
      },
      err=> console.log(err)
    )
  }
      
    
    }