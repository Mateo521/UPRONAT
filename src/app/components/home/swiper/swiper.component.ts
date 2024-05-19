import { Component } from '@angular/core';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


interface slide {
  imageUrl: string
  description: string
}

let baseUrl: string = "assets/img/"

@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
})
export class SwiperComponent {


  slides: slide[] = [
    { imageUrl: baseUrl + 'img%20(8).jpeg', description: 'Extractos vegetales' },
    { imageUrl: baseUrl + 'img%20(1).jpeg', description: 'Bioactivos para cosmética/APIS' },
    { imageUrl: baseUrl + 'img%20(2).jpeg', description: 'Aditivos alimentarios  y nutraceúticos' },
    { imageUrl: baseUrl + 'img%20(3).jpeg', description: 'Análisis metabolómicos y proteómicos' },
    { imageUrl: baseUrl + 'img%20(4).jpeg', description: 'Bioactividad de sustancias puras y mezclas complejas' },
    { imageUrl: baseUrl + 'img%20(5).jpeg', description: 'Aceites esenciales' },
    { imageUrl: baseUrl + 'img%20(6).jpeg', description: 'Cannabis' },
    { imageUrl: baseUrl + 'img%20(7).jpeg', description: 'Vinos' },
    { imageUrl: baseUrl + 'img%20(9).jpg', description: 'Cultivo in vitro' },
  ]



  
}
