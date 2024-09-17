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
  imageUrl!: string;
  title: string = 'Obtenemos aceites esenciales por destilación por arrastre de vapor y por tecnología supercrítica y los caracterizamos cuali y cuantitativamente';
  url:string = 'Aceites esenciales';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
           // imageUrl!: string;
           this.imageUrl = this.imageService.getImage(8); 
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
      content: ['Obtención de aceites esenciales e hidrolatos a partir de biomasa fresca o congelada a escalas laboratorio, banco y piloto.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Obtención de aceites esenciales por extracción con <b>CO<sub>2<sub/></b>  supercrítico (SFE)',
      content: ['Obtención de aceites esenciales e hidrolatos a partir de biomasa seca y molida a escalas laboratorio y banco.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Caracterización de aceites esenciales, hidrolatos y extractos aromáticos por GC-MS (Cromatografía gaseosa acoplada a espectrometría de masas de impacto electrónico) y GC-FID (Cromatografía gaseosa con detección de ionización de llama).',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Asesoramiento a productores: Optimización de procesos y rendimientos',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    }
  ];


}
