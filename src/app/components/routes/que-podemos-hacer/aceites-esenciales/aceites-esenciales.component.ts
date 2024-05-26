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
  selector: 'app-aceites-esenciales',
  templateUrl: './aceites-esenciales.component.html',
  styleUrl: './aceites-esenciales.component.css'
})
export class AceitesEsencialesComponent implements AfterViewInit {
  logoImg!: string;
  title: string = 'Obtenemos aceites esenciales por destilación por arrastre de vapor y por tecnología supercrítica y los caracterizamos cuali y cuantitativamente';
  url:string = 'Aceites esenciales';
  description:string = 'Qué podemos hacer';
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
      title: 'Obtención de aceites esenciales e hidrolatos por destilación por arrastre de vapor (DAV)',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Obtención de aceites esenciales por extracción con CO2 supercrítico (SFE)',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Caracterización de aceites esenciales y aromas por GC-MS y GC-FID',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Optimización de procesos y rendimientos',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    },
    {
      id: 5,
      title: 'Caracterización de hidrolatos por técnicas cromatográficas',
      content: ['A', 'B', 'C'],
      links: [
        { text: 'D', href: '#' },
        { text: 'E', href: '#' }
      ]
    }
  ];


}
