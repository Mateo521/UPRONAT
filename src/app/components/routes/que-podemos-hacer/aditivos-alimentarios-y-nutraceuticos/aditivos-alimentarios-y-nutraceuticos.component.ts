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
  selector: 'app-aditivos-alimentarios-y-nutraceuticos',
  templateUrl: './aditivos-alimentarios-y-nutraceuticos.component.html',
  styleUrl: './aditivos-alimentarios-y-nutraceuticos.component.css'
})
export class AditivosAlimentariosYNutraceuticosComponent implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Extraemos, purificamos y caracterizamos bioactivos a partir de biomasa vegetal y microbiana. Recuperamos ingredientes a partir de subproductos agroalimenticios.';
  url:string = 'Aditivos alimentarios y nutraceúticos';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
       // imageUrl!: string;
       this.imageUrl = this.imageService.getImage(6); 
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
      title: 'Obtención y caracterización química de extractos a partir de fuentes naturales (plantas, biomasa residual, cultivos microbianos y de algas, etc.)',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Extracción y producción in vitro de colorantes naturales',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Caracterización cromatográfica y espectrométrica de bioproductos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Purificación de metabolitos especializados y caracterización estructural',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Determinación de bioactividad y toxicidad',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Obtención de mantecas vegetales ',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: 'Extracción y caracterización de aceites esenciales y grasas vegetales',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 8,
      title: 'Extracción y caracterización de fragancias e ingredientes funcionales',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 9,
      title: 'Eliminación de sustancias no deseadas',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];





}
