import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../image.service';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
interface AccordionSection {
  id: number;
  title: string;
  content: string[];
  links: { text: string, href: string }[];
}


@Component({
  selector: 'app-bioactividad-de-sustancias-puras-y-mezclas-complejas',
  templateUrl: './bioactividad-de-sustancias-puras-y-mezclas-complejas.component.html',
  styleUrl: './bioactividad-de-sustancias-puras-y-mezclas-complejas.component.css'
})
export class BioactividadDeSustanciasPurasYMezclasComplejasComponent implements AfterViewInit {
  logoImg!: string;
   imageUrl!: string;
  title: string = 'Analizamos la bioactividad y toxicidad de sustancias puras y mezclas complejas';
  url:string = 'Bioactividad de sustancias puras y mezclas complejas';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
          // imageUrl!: string;
          this.imageUrl = this.imageService.getImage(5); 
    this.logoImg = this.imageService.getLogo();
  }
  ngAfterViewInit(): void {
    this.initializeScripts();
  }

  private initializeScripts(): void {
    AOS.init({ once: true, duration: 1000 });
    initFlowbite();
  }

  accordionSections: AccordionSection[] = [
    {
      id: 1,
      title: '⦁	Propiedades anticancerígenas de sustancias presentes en alimentos y bebidas',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Detección de alérgenos en alimentos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Evaluación de frescura de alimentos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Evaluación de actividad antioxidante',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 5,
      title: 'Determinación de capacidad inhibidora del desarrollo de biofilms bacterianos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 6,
      title: 'Determinación de inhibidores de glucosidasas y lipasas',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 7,
      title: 'Determinación de actividad antimicrobiana',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 8,
      title: 'Determinación de fitotoxicidad',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 9,
      title: 'Determinación de ictiotoxicidad',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    
  ];





}
