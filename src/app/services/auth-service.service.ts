import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://ecommerce-backend-xd.herokuapp.com/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  registerUsers(email : string, username: string, password: string): Observable<any> {
    return this.http.post(baseUrl+'v1/users/', { email, username, password }, httpOptions)
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(baseUrl+'login/', {username, password}, httpOptions)
  }


}
