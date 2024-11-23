import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "assets/Logos_Svg/"


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'] // Corrige el nombre del campo: 'styleUrl' -> 'styleUrls'
})
export class NosotrosComponent implements OnInit {
  imgs: logo[] = [
    { imageUrl: baseUrl + '1.png', description: 'Logo' },
    { imageUrl: baseUrl + '8.png', description: 'Logo Dark' }
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'Nosotros';
    const pageDescription = 'La UProNat-UNSL está pensada para ser un punto de encuentro de docentes, estudiantes, investigadores, científicos, emprendedores, empresarios y gobernantes para generar, en forma sinérgica, acciones relacionadas al aprovechamiento integral e integrador de productos naturales con el fin de producir innovaciones que sean disruptivas para el desarrollo de la región.';

   
    this.titleService.setTitle(pageTitle);


    this.metaService.updateTag({
      name: 'description',
      content: pageDescription
    });
  }
}
