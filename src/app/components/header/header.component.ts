import { Component } from '@angular/core';


interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "/assets/Logos_Svg/"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})




export class HeaderComponent {

  imgs: logo[] = [
    {imageUrl: baseUrl + '7.svg', description: 'Logo Dark' },
    {imageUrl: baseUrl + '8.png', description: 'Logo' },
   ]

  
}
