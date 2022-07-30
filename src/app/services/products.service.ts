import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  array: any[] = [
    {'url': 'https://images.unsplash.com/photo-1507253831417-37c43a944f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 1, 'price': 20},
    {'url': 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 2, 'price': 35},
    {'url': 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 3, 'price': 30},
    {'url': 'https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 4, 'price': 20},
    {'url': 'https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 5, 'price': 22},
    {'url': 'https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 6, 'price': 18},
    {'url': 'https://images.unsplash.com/photo-1592236943360-f5409792c176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 7, 'price': 38},
    {'url': 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 8, 'price': 15},
    {'url': 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 9, 'price': 20},
    {'url': 'https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&', 'name': 'Product Name', 'id': 10, 'price': 28}
  ]

}
