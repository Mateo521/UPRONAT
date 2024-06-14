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
  imageUrl!: string;
  url:string = 'Extractos vegetales';
  description:string = 'Qué podemos hacer';
  title: string = 'Preparamos extractos a partir de tu biomasa usando solventes verdes o fluidos supercríticos y los caracterizamos mediante tecnologías analíticas de alta complejidad';

  constructor(private imageService: ImageService  ) {}

  ngOnInit(): void {
    this.logoImg = this.imageService.getLogo();
   // imageUrl!: string;
    this.imageUrl = this.imageService.getImage(1); 
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
      content: ['La técnica de extracción de productos naturales mediante fluidos supercríticos implica la obtención de aceites esenciales, aceites fijos y otros extractos a partir de biomasa utilizando dióxido de carbono supercrítico como solvente, bajo condiciones de presión y temperatura controladas. Este método garantiza la obtención de extractos de alta calidad, libres de residuos de solventes y sin riesgo de deterioro térmico u oxidativo. Su versatilidad lo hace aplicable a una amplia gama de materiales vegetales y microbianos, siendo especialmente adecuado para la producción de bioproductos en la industria alimentaria, cosmética y farmacéutica. '],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Extracciones liquido-liquido',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Extracciones y fraccionamientos con solventes verdes',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Extracciones y separaciones con fluidos supercríticos',
      content: ['Mediante la extracción con dióxido de carbono supercrítico, es posible llevar a cabo la purificación, fraccionamiento, aislamiento y secado de componentes presentes en materiales naturales o sintéticos. Esta técnica permite una extracción selectiva de los componentes deseados o no deseados en un proceso semicontinuo, asegurando la obtención de muestras libres de solventes y sin riesgo de deterioro térmico u oxidativo.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Caracterización cromatográfica y espectrométrica (RMN, EM, UV, IR)',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];





}
