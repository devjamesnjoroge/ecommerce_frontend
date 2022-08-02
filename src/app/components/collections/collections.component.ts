import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  @Output() addNewEvent = new EventEmitter<any>();

  constructor(private cart: CartService, private products: ProductsService) { }

  array: any[] = [];

  ngOnInit(): void {
    this.products.getProducts().then(() => {
      this.array = this.products.array;
    }).catch(() => {
      console.log('error');
    });
  }

  addToCart(cart: any) {
    this.cart.addToCart(cart);
    this.addNewEvent.emit(true)
  }

}
