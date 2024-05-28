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
  selector: 'app-cultivo-in-vitro',
  templateUrl: './cultivo-in-vitro.component.html',
  styleUrl: './cultivo-in-vitro.component.css'
})
export class CultivoInVitroComponent implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Obtenemos cultivos de células madres vegetales para la elaboración de productos cosméticos y nutracéuticos. <br>Aislamos e identificamos macroorganismos para aplicaciones biotecnológicas.';
  url:string = 'Cultivo in vitro';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
     // imageUrl!: string;
     this.imageUrl = this.imageService.getImage(2); 
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
      title: 'Establecimiento, producción y caracterización de líneas celulares vegetales (células madre)',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Propagación in vitro de especies vegetales',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Aislamiento e identificación molecular de microorganismos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Determinación de bioactivos a partir de cultivos celulares y microbianos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    }
  ];
}
