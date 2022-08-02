import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() addNewEvent = new EventEmitter<any>();
  id!: string;
  product!: any;
  sizes: any[] = []
  constructor(private route: ActivatedRoute, private products: ProductsService, private cart: CartService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.product = this.products.array[parseInt(this.id) - 1];
    this.sizes = this.products.array[parseInt(this.id) - 1].sizes.split(',');
  }

  addToCart(){

    this.cart.addToCart(this.product);
    this.addNewEvent.emit(true)

  }

}
