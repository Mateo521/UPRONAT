import { Component } from '@angular/core';

import SwiperCore, { SwiperOptions } from 'swiper';
import 'swiper/css';  

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css'
})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 15,
    navigation:  {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {clickable:true}
  }
  items = [1,2,3,4,5,6,7,8]
  



}
