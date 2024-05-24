import { Component } from '@angular/core';


interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "assets/Logos_Svg/"


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {


  
  imgs: logo[] = [
    {imageUrl: baseUrl + 'file.png', description: 'Logo' },
    {imageUrl: baseUrl + '8.png', description: 'Logo Dark'  },
   ]


}
