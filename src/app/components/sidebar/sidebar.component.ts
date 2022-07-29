import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private breakpointObserver: BreakpointObserver, private token: TokenStorageService, private cart: CartService) { }

  ngOnInit() :void{

    if (this.token.getToken()){
      this.isLoggedIn = true;
    }

    this.totalItems = this.cart.cart

  }

  logOut(){

    this.token.logout()
    location.reload()
    
  }


}
