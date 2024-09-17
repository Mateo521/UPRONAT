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
  selector: 'app-asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos',
  templateUrl: './asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos.component.html',
  styleUrl: './asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos.component.css'
})
export class AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent {
  logoImg!: string;
  imageUrl!: string;
  title: string = 'Asesoramos en diseño de experimentos para estudios proteómicos, extracción de proteínas a partir de muestras biológicas y ofrecemos análisis bioinformático de datos de masas obtenidos a partir de servicios tercerizados.';
  url:string = 'Asesoramiento y análisis bioinformático de datos proteómicos';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
     // imageUrl!: string;
     this.imageUrl = this.imageService.getImage(10); 
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
      title: 'Asesoramiento en diseño de experimentos para una correcta ejecución de estudios proteómicos, dependiendo de los objetivos de análisis.',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Extracción de proteínas a nivel intra y/o extracelular a partir de biomasa vegetal o cultivos de microorganismos, como hongos filamentosos y levaduras.',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Análisis bioinformático de datos obtenidos en diversos centros de proteómica.',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Análisis de expresión diferencial de proteínas.',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];




}
