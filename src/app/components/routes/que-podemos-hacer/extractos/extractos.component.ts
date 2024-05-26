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
  selector: 'app-extractos',
  templateUrl: './extractos.component.html',
  styleUrl: './extractos.component.css'
})

export class ExtractosComponent  implements AfterViewInit {

  logoImg!: string;

  url:string = 'Extractos vegetales';
  description:string = 'Qué podemos hacer';
  title: string = 'Preparamos extractos a partir de tu biomasa usando solventes verdes o fluidos supercríticos y los caracterizamos mediante tecnologías analíticas de alta complejidad';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
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
      title: 'Preparación de extractos a partir de biomasa vegetal, residuos agroindustriales y cultivos microbianos por extracción con solventes verdes y fluidos supercríticos. (descripción, ventajas y aplicaciones de SCF) ',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Extracciones liquido-liquido',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Extracciones y fraccionamientos con solventes verdes',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Extracciones y separaciones con fluidos supercríticos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 5,
      title: 'Caracterización cromatográfica y espectrométrica (RMN, EM, UV, IR)',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
  ];





}