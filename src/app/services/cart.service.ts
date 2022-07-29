import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: any[] = []

  addToCart(product: any){
    this.cart.push(product)
  }

  getCart(){
    return this.cart
  }

  removeFromCart(product: any){
    this.cart = this.cart.filter(item => item.id !== product.id)
  }

  clearCart(){
    this.cart = []
  }

  getTotal(){
    return this.cart.reduce((sum, current) => sum + current.price, 0)
  }
  
  getCartLength(){
    return this.cart.length
  }

}
