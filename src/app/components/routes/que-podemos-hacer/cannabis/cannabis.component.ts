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
  selector: 'app-cannabis',
  templateUrl: './cannabis.component.html',
  styleUrl: './cannabis.component.css'
})
export class CannabisComponent  implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'En el marco del PROGRAMA CANNABIS-UNSL procesamos tu biomasa para obtener bioproductos derivados de cáñamo y de cannabis. Realizamos análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de tu producto.';
  url:string = 'Cannabis';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
       // imageUrl!: string;
       this.imageUrl = this.imageService.getImage(3); 
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
      title: 'Preparación de resinas',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Obtención de aceites esenciales e hidrolatos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Obtención de extractos por maceración etanólica y fluidos supercríticos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Concentración de extractos etanólicos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Aislamiento y purificación de fitocannabinoides neutros y ácidos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Análisis de cannabinoides en extractos, flores y preparados finales: CBD, CBDA, CBN,CBG, CBGA, Δ9-THC, Δ8-THC y Δ9-THCA',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: 'Análisis de metales pesados',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 8,
      title: 'Análisis de terpenos y compuestos volátiles',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 9,
      title: 'Análisis de fenoles totales',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 10,
      title: 'Determinación de actividad antioxidante',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 11,
      title: 'Investigación de disolventes',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 12,
      title: 'Determinación de residuos de plaguicidas y micotoxinas',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 13,
      title: 'Detección de microoganismos: Aerobios mesófilos, mohos y levaduras',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 14,
      title: 'Detección de virus: Virus latente del lúpulo (HLVd), virus de la clorosis de la lechuga (LCV), virus críptico del Cannabis (CanCV), virus Mosaico del tabaco (TMV)',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 15,
      title: 'Genotipado por microsatélites',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 16,
      title: 'Detección de género',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 17,
      title: 'Desarrollo de protocolos ad hoc de micropropagación para genéticas específicas',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    
  ];





}
