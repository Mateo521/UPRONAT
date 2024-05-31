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
  selector: 'app-bioactivos-para-cosmetica-apis',
  templateUrl: './bioactivos-para-cosmetica-apis.component.html',
  styleUrl: './bioactivos-para-cosmetica-apis.component.css'
})
export class BioactivosParaCosmeticaApisComponent implements AfterViewInit {
  logoImg!: string;
 imageUrl!: string;
  title: string = 'Extraemos, purificamos y caracterizamos bioactivos a partir de biomasa vegetal y microbiana. Recuperamos ingredientes a partir de subproductos agroalimenticios.';
  url:string = 'Bioactivos para cosmética';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
        // imageUrl!: string;
        this.imageUrl = this.imageService.getImage(4); 
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
      title: 'Extracción sustentable de bioactivos a partir de biomasa vegetal y microbiana',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Recuperación de bioactivos a partir residuos agroindustriales ',
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
    
    {
      id: 10,
      title: 'Identificación de moléculas biomarcadoras y análisis de calidad en drogas vegetales y fitomedicamentos',
      content: ['', '', ''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];





}
