import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: string[] = [
    'assets/img/carrusel/img(17).jpeg',
    'assets/img/carrusel/img(15).jpeg', // 'assets/img/carrusel/img(14).jpeg',
    'assets/img/carrusel/img(5).jpeg',
    'assets/img/carrusel/img(16).png',
    'assets/img/carrusel/img(13).jpeg',
    'assets/img/carrusel/img(18).jpeg',
    'assets/img/carrusel/img(19).jpeg',
    'assets/img/carrusel/img(8).jpeg',
    'assets/img/carrusel/img(21).jpeg'
  ];

  private logo = { img: 'assets/Logos_Svg/1.png' }; // 

  constructor() {}

  getLogo() {
    return this.logo.img;
  }
  getImage(index: number): string {
    return this.images[index] || 'assets/img/carrusel/pexels-photo-10181438.jpeg'; // Una imagen por defecto si el índice no existe
  }
}
