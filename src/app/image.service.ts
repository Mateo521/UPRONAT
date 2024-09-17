import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: string[] = [
    'assets/img/carrusel/img(25).jpg',
    'assets/img/carrusel/img(15).jpeg', // 'assets/img/carrusel/img(14).jpeg',
    'assets/img/carrusel/img(5).jpeg',
    'assets/img/carrusel/unsl-cannabis-05.png',
    'assets/img/carrusel/img(13).jpeg',
    'assets/img/carrusel/img(18).jpeg',
    'assets/img/carrusel/img(11).jpeg',
    'assets/img/carrusel/img(6).jpeg',
    'assets/img/carrusel/img(21).jpeg',
    'assets/img/carrusel/img(16).jpeg',
    'assets/img/carrusel/img.jpeg'
  ];

  getImagesbreadcrumb(): string[] {
    return [
      'assets/Iconos_Png/IconoClaro.png',
      'assets/Iconos_Png/IconoOscuro.png',
      'assets/Iconos_Png/unsl.png',
      'assets/Iconos_Png/unsl(1).png',
    ];
  }

  private logo = { img: 'assets/Logos_Svg/1.png' }; // 

  constructor() {}

  getLogo() {
    return this.logo.img;
  }
  getImage(index: number): string {
    return this.images[index] || 'assets/img/carrusel/pexels-photo-10181438.jpeg'; // Una imagen por defecto si el índice no existe
  }
}
