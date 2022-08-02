import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

const BaseUrl = 'https://ecommerce-backend-xd.herokuapp.com/api/v1/products';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  array: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<Product[]>(BaseUrl).subscribe({
        next: (res: Product[])=>{
  
          this.array = res;
          
          resolve();
        },
        error(error:any){
  
          reject(error)
        },
        complete(){
  
          console.log('complete')
  
        },
        
      });
      });
      return promise
  
  }



}
