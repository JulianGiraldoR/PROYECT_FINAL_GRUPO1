import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';


import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 

  @Input() product: Product = {
    _id:"",
    title:"",
    description:"",
    category:"",
    origin:"",
    ingredients:"",
    imgUrl:"",
  }

  @Output() productAdded = new EventEmitter<Product>()



  constructor(
   
  ) { }

  ngOnInit():void{
    

 
}

}
