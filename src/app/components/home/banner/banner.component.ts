import { Component } from '@angular/core';

interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "assets/Logos_Svg/"

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {



  imgs: logo[] = [
    {imageUrl: baseUrl + 'file.png', description: 'Logo' },
    {imageUrl: baseUrl + '8.png', description: 'Logo Dark'  },
   ]


}
