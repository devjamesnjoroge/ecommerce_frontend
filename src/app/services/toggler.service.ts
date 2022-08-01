import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {

  toggle:any = 0;
  constructor() { }
}
