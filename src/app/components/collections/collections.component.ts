import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  array: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  constructor() { }

  ngOnInit(): void {
  }

}
