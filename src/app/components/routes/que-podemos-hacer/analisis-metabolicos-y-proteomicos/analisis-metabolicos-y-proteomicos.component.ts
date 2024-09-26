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
  selector: 'app-analisis-metabolicos-y-proteomicos',
  templateUrl: './analisis-metabolicos-y-proteomicos.component.html',
  styleUrl: './analisis-metabolicos-y-proteomicos.component.css'
})
export class AnalisisMetabolicosYProteomicosComponent implements AfterViewInit {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Podemos analizar la presencia de metabolitos especializados y compuestos de interés por distintas técnicas como Resonancia Magnética Nuclear (RMN), Espectrometría de Masas (EM) y Cromatografía Líquida de Alta Eficiencia (HPLC)';
  url:string = 'Análisis metabolómicos por técnicas espectrométricas';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
     // imageUrl!: string;
     this.imageUrl = this.imageService.getImage(7); 
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
      title: '⦁ Análisis estructural por RMN',
      content: ['La resonancia magnética nuclear (RMN) en análisis químico es una técnica utilizada para determinar la estructura molecular y la dinámica de compuestos químicos. Funciona mediante la exposición de muestras a un fuerte campo magnético, lo que alinea los núcleos de ciertos átomos. Luego, se aplican pulsos de radiofrecuencia, perturbando esta alineación. Al volver a su estado original, los núcleos emiten señales características. Estas señales son detectadas y analizadas para obtener información sobre el entorno químico de los átomos, permitiendo la identificación de estructuras moleculares, la determinación de pureza y la investigación de interacciones moleculares. <br> Los núcleos analizables más habituales son <sup>1</sup>H y <sup>13</sup>C. También se pueden medir todos los núcleos activos a la técnica, que resuenen en las frecuencias comprendidas en el rango de <sup>31</sup>P-<sup>109</sup>Ag, como por ejemplo: <sup>31</sup>P, <sup>195</sup>Pt, <sup>11</sup>B, <sup>119</sup>Sn, <sup>77</sup>Se, <sup>113</sup>Cd, <sup>199</sup>Hg, <sup>207</sup>Pb y otros.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Aplicaciones',
      content: ['<ul> <li>Caracterización estructural de compuestos de síntesis o aislados de medios de distinta naturaleza.</li><li> Confirmación de estructuras.</li><li> Identificación de compuestos.</li> <li>Estudios de composición de mezclas de distintas procedencias: extractos biológicos, metabolitos, productos alimenticios, etc.</li><li> Determinación de pureza, cuantificación.</li><li> Movilidad molecular: determinación de conformaciones en disolución.</li> <li>Seguimiento de procesos, reacciones, cinéticas.<li> Estudios de procesos de asociación.</li><li> Estudios a alta y baja temperatura.</li><li> Determinación de exceso enantiomérico.</li></ul>'],
   
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: '⦁ Cuantificación de metabolitos por <sup>1</sup>H-RMN  (independiente de estándares específicos)',
      content: ['La resonancia magnética nuclear cuantitativa de protones (¹H-qNMR) es una técnica analítica precisa para la determinación cuantitativa de compuestos químicos. La base de esta técnica reside en la capacidad de los protones (¹H) en un compuesto para responder a un campo magnético externo. Cuando se aplica un campo magnético, los núcleos de hidrógeno se alinean y luego, al ser perturbados por pulsos de radiofrecuencia, emiten señales que son detectadas como espectros de RMN. La intensidad de estas señales es directamente proporcional al número de protones presentes en la muestra, permitiendo así una cuantificación precisa. <br> Una ventaja clave del ¹H-qNMR es su capacidad para proporcionar información cuantitativa sin necesidad de patrones de referencia externos. La técnica utiliza un estándar interno de concentración conocida para comparar y cuantificar la cantidad de analito en la muestra. La precisión y exactitud de ¹H-qNMR son altas, y la técnica es aplicable a una amplia gama de compuestos orgánicos.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Aplicaciones',
      content: ['Las aplicaciones del ¹H-qNMR son vastas, incluyendo la cuantificación de componentes en mezclas complejas, la determinación de pureza de sustancias farmacéuticas, el análisis de alimentos y bebidas para detectar adulteraciones y verificar la calidad, y la identificación de metabolitos en estudios bioquímicos. Además, es una herramienta valiosa en la investigación y desarrollo de nuevos compuestos químicos y farmacéuticos, ofreciendo una metodología robusta y no destructiva para la cuantificación precisa de sustancias.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: '⦁ Identificación y cuantificación de compuestos volátiles por CG-EM y CG-FID',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];





}
