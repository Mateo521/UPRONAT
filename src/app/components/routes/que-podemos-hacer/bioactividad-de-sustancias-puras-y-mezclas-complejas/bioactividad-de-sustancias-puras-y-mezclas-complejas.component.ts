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
  selector: 'app-bioactividad-de-sustancias-puras-y-mezclas-complejas',
  templateUrl: './bioactividad-de-sustancias-puras-y-mezclas-complejas.component.html',
  styleUrl: './bioactividad-de-sustancias-puras-y-mezclas-complejas.component.css'
})
export class BioactividadDeSustanciasPurasYMezclasComplejasComponent implements AfterViewInit {
  logoImg!: string;
   imageUrl!: string;
  title: string = 'Analizamos la bioactividad y toxicidad de sustancias puras y mezclas complejas';
  url:string = 'Bioactividad de sustancias puras y mezclas complejas';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
          // imageUrl!: string;
          this.imageUrl = this.imageService.getImage(5); 
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
      title: 'Propiedades anticancerígenas de sustancias presentes en alimentos y bebidas',
      content: ['Determinación de la capacidad de ciertos alimentos o componentes de estos de inhibir dianas moleculares implicadas en el cáncer, tales como ADN polimerasas y topoisomerasas humanas'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Detección de alérgenos en alimentos',
      content: ['Identificación y cuantificación de sustancias que pueden causar reacciones alérgicas en individuos sensibles, como el gluten, la lactosa, los frutos secos y los mariscos mediante inmunoensayos.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Evaluación de frescura de alimentos',
      content: ['Uso de métodos sensoriales, análisis microbiológicos moleculares e inmunoensayos para evaluar la frescura y prevenir el consumo de productos en mal estado, prolongar la vida útil de los alimentos y mantener la confianza del consumidor en la cadena de suministro alimentario.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Evaluación de actividad antioxidante',
      content: ['La evaluación de la actividad antioxidante es un proceso clave para determinar la capacidad de los alimentos y otros productos para neutralizar los radicales libres, que son moléculas inestables que pueden causar daño celular. Este análisis se realiza mediante diferentes métodos, como el ensayo mediante uso de sondas ROS'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Determinación de capacidad inhibidora del desarrollo de biofilms bacterianos',
      content: ['Esta determinación es esencial para el desarrollo de nuevos tratamientos antimicrobianos y estrategias de limpieza que prevengan la formación de biofilms, mejorando así la eficacia de las medidas de control de infecciones y la seguridad de los productos alimentarios.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: 'Determinación de inhibidores de glucosidasas y lipasas',
      content: ['La determinación de inhibidores de glucosidasas y lipasas es fundamental en la investigación de tratamientos para enfermedades metabólicas como la diabetes y la obesidad. Para identificar y evaluar estos inhibidores, se utilizan ensayos enzimáticos específicos que miden la reducción de la actividad enzimática en presencia de potenciales inhibidores.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: 'Determinación de actividad antimicrobiana',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 8,
      title: 'Determinación de fitotoxicidad',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 9,
      title: 'Determinación de ictiotoxicidad',
      content: ['Determinación de toxicidad aguda y crónica de sustancias puras y mezclas complejas utilizando Poecillia reticulata y Danio rerio como modelos'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    
  ];





}
