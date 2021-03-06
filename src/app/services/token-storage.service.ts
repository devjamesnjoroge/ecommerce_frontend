import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void{

    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

  }

  public getUser(): any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user){
      return JSON.parse(user);
    }
    return {};
  }

  public logout(): any{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
  }

}
