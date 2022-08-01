import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    code: ['', Validators.required],
  });
  isLinear = true;

  constructor(private cart: CartService, private _formBuilder: FormBuilder) { }

  cartS!: any;

  ngOnInit(): void {

    this.cartS = this.cart;

  }

}
