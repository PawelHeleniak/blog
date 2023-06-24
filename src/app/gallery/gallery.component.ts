import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  ngOnInit() {}

  //---Dane---
  items: Array<Items> = [
    {
      img: "../../assets/image/4060ti.jpg",
      imgAlt: "RTX 4060Ti",
      ID: 1,
    },
    {
      img: "../../assets/image/gogle-apple-ar.jpg",
      imgAlt: "gogle apple ar/vr",
      ID: 2,
    },
    {
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
      ID: 3,
    },
    {
      img: "../../assets/image/network.jpg",
      imgAlt: "6G technology",
      ID: 4,
    },
    {
      img: "../../assets/image/network.jpg",
      imgAlt: "6G technology",
      ID: 5,
    },
    {
      img: "../../assets/image/4060ti.jpg",
      imgAlt: "RTX 4060Ti",
      ID: 6, 
    },
    {
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
      ID: 7,
    },
    {
      img: "../../assets/image/gogle-apple-ar.jpg",
      imgAlt: "gogle apple ar/vr",
      ID: 8,
    },
    {
      img: "../../assets/image/gogle-apple-ar.jpg",
      imgAlt: "gogle apple ar/vr",
      ID: 9,
    },
    {
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
      ID: 10,
    },
    {
      img: "../../assets/image/4060ti.jpg",
      imgAlt: "RTX 4060Ti",
      ID: 11,
    },
  ];
}
interface Items{
  img: string;
  imgAlt: string;
  ID: number;
}