import { Component } from '@angular/core';
interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "assets/Logos_Svg/"


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  imgs: logo[] = [
    {imageUrl: baseUrl + '7.svg', description: 'Logo Dark' },
    {imageUrl: baseUrl + '8.png', description: 'Logo' },
   ]


}
