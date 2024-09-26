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
      title: 'Establecimiento, producción y caracterización de cultivos <i>in vitro</i> vegetales',
      content: ['Las células madre vegetales o células totipotentes son células indiferenciadas, capaces de reparar cualquier tejido dañado o de regenerar una planta completa y funcional. <br>  Además de sus poderes regenerativos, tienen el potencial de sintetizar fitocomplejos o cócteles ricos en moléculas bioactivas. En cosmética, las células madre vegetales se utilizan por sus propiedades antioxidantes, promoviendo la regeneración de la piel y retrasando los efectos del envejecimiento. Esta tecnología evita el impacto sobre los ecosistemas naturales, ahorrando más del 99% del consumo de agua y de tierra cultivable en comparación con los cultivos tradicionales. Al no utilizar pesticidas ni fertilizantes se minimiza la contaminación del suelo y se preserva la biodiversidad al evitar la depredación de las poblaciones silvestres para usos industriales.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Agricultura Celular Vegetal para Nutracéuticos y Cosmética',
      content: ['La agricultura celular basada en cultivos indiferenciados vegetales es una técnica emergente que permite producir alimentos en entornos controlados, de manera sostenible sin necesidad de cultivar plantas completas. Se accede con estos desarrollos de manera eficiente a compuestos con aplicaciones como nutracéuticos (suplementos alimenticios con beneficios para la salud) y cosméticos (productos para el cuidado de la piel y el cabello). Este enfoque innovador contribuye a la sostenibilidad, ya que reduce el uso de tierras agrícolas, agua y otros recursos naturales, mientras que permite la producción constante y controlada de compuestos de alta calidad.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Propagación <i>in vitro</i> de especies vegetales',
      content: ['Realizamos la multiplicación y el cultivo de especies vegetales a través de técnicas de micropropagación, lo que permite obtener plántulas sanas y homogéneas en condiciones controladas. Este enfoque es fundamental para la conservación de especies, así como para la producción comercial de plantas.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Biorremediación con Microorganismos y Tejidos Vegetales',
      content: ['Investigamos el uso de microorganismos y tejidos vegetales para la biorremediación, aplicando estos sistemas para la eliminación de contaminantes del suelo y el agua. Utilizamos tanto microorganismos como cultivos vegetales para descomponer y neutralizar compuestos tóxicos. Mediante desarrollos específicos para cada ambiente y cada problemática particular podemos aportar alternativas para a la restauración de ecosistemas contaminados y el tratamiento de efluentes. '],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Aislamiento e identificación molecular de microorganismos',
      content: ['Realizamos el aislamiento de microorganismos de diversas fuentes naturales y su posterior identificación molecular utilizando técnicas de biología molecular como PCR y secuenciación de ADN. Estas herramientas nos permiten identificar con precisión bacterias, hongos filamentosos y levaduras, cruciales para la investigación de cepas con potencial biotecnológico o industrial.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Determinación de bioactivos a partir de cultivos celulares y microbianos',
      content: ['Llevamos a cabo la producción y análisis de compuestos bioactivos obtenidos de cultivos celulares vegetales y microorganismos. Utilizamos técnicas como HPLC, cromatografía gaseosa y espectrofotometrías para identificar, cuantificar y optimizar la producción de metabolitos con propiedades nutracéuticas, cosméticas y farmacéuticas, como polifenoles, alcaloides y otros metabolitos secundarios.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    }
  ];
}
