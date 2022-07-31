import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: any[] = []

  addToCart(product: any){
    if (this.cart.filter(item => item.id === product.id).length > 0){
      this.cart.filter(item => item.id === product.id)[0].quantity++
    } else{
      product.quantity = 1
      this.cart.push(product)
    }
  }

  getCart(){
    return this.cart
  }

  subtractFromCart(product: any){
    if (this.cart.filter(item => item.id === product.id).length > 0){
      this.cart.filter(item => item.id === product.id)[0].quantity--
      if (this.cart.filter(item => item.id === product.id)[0].quantity === 0){
        this.cart.splice(this.cart.indexOf(product), 1)
      }
    }
  }

  clearCart(){
    this.cart = []
  }

  
  getTotal(){
    let total = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }
  
  getCartLength(){
    return this.cart.length
  }

}
