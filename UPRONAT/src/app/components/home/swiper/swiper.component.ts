import { Component } from '@angular/core';

import SwiperCore, { SwiperOptions } from 'swiper';
import 'swiper/css/bundle';

interface slide {
  imageUrl: string
  description: string
}

let baseUrl: string = "/assets/Logos_Svg/"

@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css'
})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 15,
    navigation: true,
    pagination: { clickable:true }
  }

  slides: slide[] = [
    {imageUrl: baseUrl + '1.svg', description: 'First image' },
    {imageUrl: baseUrl + '2.svg', description: 'Second image' },
    {imageUrl: baseUrl + '3.svg', description: 'Third image' },
    {imageUrl: baseUrl + '4.svg', description: 'Forth image' },
    {imageUrl: baseUrl + '5.svg', description: 'Fift image' },
    {imageUrl: baseUrl + '6.svg', description: 'Sixth image' },
  ]
  



}
