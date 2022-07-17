import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://127.0.0.1:8000/api/v1/'

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

  registerUsers(email : string, username: string, password: string){
    return this.http.post(baseUrl+'users/', { email, username, password }, httpOptions)
  }


}
