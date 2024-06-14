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
  title: string = 'Obtenemos cultivos de células madres vegetales para la elaboración de productos cosméticos y nutracéuticos. Aislamos e identificamos microorganismos para aplicaciones biotecnológicas.';
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
      content: ['Las células madre vegetales o células totipotentes son células indiferenciadas, capaces de reparar cualquier tejido dañado o de regenerar una planta completa y funcional.  Además de sus poderes regenerativos, tienen el potencial de sintetizar fitocomplejos o cócteles ricos en moléculas bioactivas. En cosmética, las células madre vegetales se utilizan por sus propiedades antioxidantes, promoviendo la regeneración de la piel y retrasando los efectos del envejecimiento. Esta tecnología evita el impacto sobre los ecosistemas naturales, ahorrando más del 99% del consumo de agua y de tierra cultivable en comparación con los cultivos tradicionales. Al no utilizar pesticidas ni fertilizantes se minimiza la contaminación del suelo y se preserva la biodiversidad al evitar la depredación de las poblaciones silvestres para usos industriales. <br> La agricultura celular basada en cultivos indiferenciados vegetales es una técnica emergente que permite para producir alimentos en entornos controlados, de manera sostenible sin necesidad de cultivar plantas completas.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Propagación in vitro de especies vegetales',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Aislamiento e identificación molecular de microorganismos',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Determinación de bioactivos a partir de cultivos celulares y microbianos',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    }
  ];
}
