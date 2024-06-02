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
  selector: 'app-analisis-metabolicos-y-proteomicos',
  templateUrl: './analisis-metabolicos-y-proteomicos.component.html',
  styleUrl: './analisis-metabolicos-y-proteomicos.component.css'
})
export class AnalisisMetabolicosYProteomicosComponent implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Podemos analizar la presencia de metabolitos especializados por RMN y la expresión de proteínas vegetales y microbianas en tus muestras';
  url:string = 'Análisis metabolómicos y proteómicos';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
     // imageUrl!: string;
     this.imageUrl = this.imageService.getImage(7); 
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
      title: 'Análisis por RMN de compuestos puros y mezclas',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Determinación estructural por RMN y EM',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Cuantificación de metabolitos por 1H-RMN (independiente de estándares específicos)',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Identificación y cuantificación de compuestos volátiles por CG-EM y CG-FID',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Extracción y cuantificación de proteínas vegetales y microbianas',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Análisis proteómico dependiente e independiente de geles',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: 'Análisis bioinformático',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];





}
