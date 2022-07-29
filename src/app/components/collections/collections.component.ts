import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor(private cart: CartService, private products: ProductsService) { }

  array: any[] = this.products.array;

  ngOnInit(): void {
    console.log(this.cart.getCart(), this.cart.getTotal());
  }

  addToCart(cart: any) {
    alert('Item added to cart');
    this.cart.addToCart(cart);
  }

}
