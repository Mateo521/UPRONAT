import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private logo = { img: 'assets/Logos_Svg/1.png' }; // 

  constructor() {}

  getLogo() {
    return this.logo.img;
  }
}
