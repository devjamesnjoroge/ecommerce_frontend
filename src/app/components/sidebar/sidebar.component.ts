import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  constructor(private breakpointObserver: BreakpointObserver, private token: TokenStorageService) { }

  ngOnInit() :void{

    if (this.token.getToken()){
      this.isLoggedIn = true;
    }

  }

  logOut(){

    this.token.logout()
    location.reload()
    
  }
  

}
