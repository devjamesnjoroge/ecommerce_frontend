import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }


  banners: any[] = [
    {'title': 'Hoodies & Sweats', 'image_url': 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1658289182/1_yafnei.png'},
    {'title': 'Graphic & Tees', 'image_url': 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1658289181/2_v2iqkd.png'},
    {'title': 'Jeans', 'image_url': 'https://res.cloudinary.com/dkz8w5n6k/image/upload/v1658289181/3_x1z7io.png'}
  ]

  ngOnInit(): void {
  }

}
