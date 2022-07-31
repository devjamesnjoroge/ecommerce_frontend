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
    this.cart.addToCart(cart);
    this.cart.getTotal()
    document.querySelector(".carts")?.classList.remove("open")
    document.querySelector(".carts")?.classList.add("closed")
  }

}
