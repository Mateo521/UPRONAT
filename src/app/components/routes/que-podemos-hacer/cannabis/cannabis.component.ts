import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../image.service';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
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
  imageUrl2!: string;
  title: string = 'En el marco del PROGRAMA CANNABIS-UNSL procesamos tu biomasa para obtener bioproductos derivados de cáñamo y de cannabis. Realizamos análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de tu producto.';
  url:string = 'Cannabis';
  description:string = 'Qué podemos hacer';
  constructor(
    private imageService: ImageService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
       // imageUrl!: string;
       this.imageUrl = this.imageService.getImage(3); 
       this.imageUrl2 = this.imageService.getImage(9); 
    this.logoImg = this.imageService.getLogo();

    this.titleService.setTitle(this.title);
  
 
    this.metaService.updateTag({
      name: 'description',
      content: this.title 
    });
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
      title: 'Preparación de resinas y extractos por maceración etanólica y fluidos supercríticos',
      content: ['Obtención de resinas de espectro completo (<i>full spectrum</i>) y extractos de elevada pureza, calidad e inocuidad a partir de material vegetal (inflorescencias) secas. Extractor líquido escala piloto y extractor de CO<sub>2</sub> supercrítico a escala laboratorio/banco  '],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Obtención de aceites esenciales e hidrolatos',
      content: ['Destilación por arrastre de vapor de agua de inflorescencias y otros materiales frescos para la obtención de aceites esenciales y aguas aromáticas de fragancias exclusivas y una amplia gama de aplicaciones. Escalas: laboratorio y piloto '],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Concentración de extractos etanólicos a presión reducida para eliminación de solventes orgánicos ',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Aislamiento y purificación de fitocannabinoides neutros y ácidos. Obtención de CBD y THC de alta pureza. Remoción de THC para la obtención de extractos de amplio espectro (<i>broad spectrum</i>).',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Análisis de cannabinoides en extractos, flores y preparados finales: CBD, CBDA, CBN, CBG, CBGA, Δ9-THC, Δ8-THC y Δ9-THCA',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Análisis de metales pesados. Determinación cuantitativa de arsénico, plomo, cadmio y mercurio en muestras vegetales, extractos y preparados finales mediante Espectrometría de Masa con Plasma Acoplado Inductivamente.',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: 'Análisis de terpenos y compuestos volátiles',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 8,
      title: 'Análisis de fenoles totales',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 9,
      title: 'Determinación de actividad antioxidante',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 10,
      title: 'Detección de microoganismos: Aerobios mesófilos, mohos y levaduras',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 12,
      title: 'Genotipado por microsatélites',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 13,
      title: 'Detección de género',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 14,
      title: 'Detección de virus: Virus latente del lúpulo (HLVd), virus de la clorosis de la lechuga (LCV), virus críptico del Cannabis (CanCV), virus Mosaico del tabaco (TMV)',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 15,
      title: 'Desarrollo de protocolos <i>ad hoc</i> de micropropagación para genéticas específicas',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    }
  ];





}
