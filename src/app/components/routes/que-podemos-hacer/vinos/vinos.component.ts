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
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrl: './vinos.component.css'
})
export class VinosComponent  implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Analizamos vinos mediante una tecnología única en Sudamérica (1H-NMR Wine screening) que permite certificar variedad, denominación de origen, terroir, añada, fraude o alteraciones e inscribirlos en una base de datos mundial. Estamos trabajando para incorporar por primera vez al Malbec argentino a la base de datos mundial de vinos por RMN';
  url:string = 'Vinos';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageUrl = this.imageService.getImage(0);
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
      title: 'Wine screening mediante 1H-NMR',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Determinación de fraude y/o alteraciones',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Determinación de terroir',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Certificación de denominación de origen',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 5,
      title: 'Determinación de la variedad',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
  ];





}
