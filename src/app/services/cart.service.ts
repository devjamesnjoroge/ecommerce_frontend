import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = JSON.parse(window.localStorage.getItem('cart') || '[]');

  saveCartChanges(){
    window.localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  
  addToCart(product: any){
    if (window.localStorage.getItem('cart') == null){
      window.localStorage.setItem('cart', JSON.stringify([]));
    }
    
    if (this.cart.filter((item: { id: any; }) => item.id == product.id).length == 0){
      product.quantity = 1;
      this.cart.push(product);
      this.saveCartChanges();
    } else if (this.cart.filter((item: { id: any; }) => item.id == product.id)[0].quantity < 14){
      this.cart.filter((item: { id: any; }) => item.id == product.id)[0].quantity += 1;
      this.saveCartChanges();
    }
  }

  subtractFromCart(product: any){
    if (this.cart.filter((item: { id: any; }) => item.id == product.id)[0].quantity > 0){
      this.cart.filter((item: { id: any; }) => item.id == product.id)[0].quantity --;
      if (this.cart.filter((item: { id: any; }) => item.id == product.id)[0].quantity == 0){
        this.cart.splice(this.cart.indexOf(this.cart.filter((item: { id: any; }) => item.id == product.id)[0]), 1);
        this.saveCartChanges();
      }
      this.saveCartChanges();
    } 
  }

  clearCart(){
    this.cart = [];
    this.saveCartChanges();
  }

  getTotalCost(){
    let total = 0;
    this.cart.forEach((item: { price: any; quantity: any; }) => {
      total += item.price * item.quantity;
    }
    );
    return total;
  }

}
