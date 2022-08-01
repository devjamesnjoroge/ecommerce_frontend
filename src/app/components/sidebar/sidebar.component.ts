import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CartService } from 'src/app/services/cart.service';
import { TogglerService } from 'src/app/services/toggler.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  panelOpenState = false;
  isLoggedIn: boolean = false;
  totalItems:any[] = [];
  cartMethods: any;

  constructor(private breakpointObserver: BreakpointObserver, private token: TokenStorageService, private cart: CartService, private toggler:TogglerService) { }

  ngOnInit() :void{

    if (this.token.getToken()){
      this.isLoggedIn = true;
    }

    this.totalItems = this.cart.cart
    this.cartMethods = this.cart

  }

  logOut(){

    this.token.logout()
    location.reload()
    
  }

  close(){
    document.querySelector(".carts")?.classList.remove("closed")
    document.querySelector(".carts")?.classList.add("open")
  }

  open(){
    document.querySelector(".carts")?.classList.remove("open")
    document.querySelector(".carts")?.classList.add("closed")
  }


  // emptyCart(){
  //   this.cart.clearCart()
  //   window.location.reload()
  // }

  plusCart(product: any){
    this.cart.addToCart(product)
  }

  minusCart(product: any){
    this.cart.subtractFromCart(product)
  }

}
