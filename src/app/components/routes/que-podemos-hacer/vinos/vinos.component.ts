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

interface Logo {
imageUrl: string;
description: string;
}

const baseUrl: string = 'assets/files/';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrl: './vinos.component.css'
})
export class VinosComponent  implements AfterViewInit {





  logoImg!: string;
  imageUrl!: string;
  title: string = 'Analizamos vinos mediante una tecnología única en Sudamérica (<sup class="pl-1">1</sup>H-NMR <i>Wine screening</i>) que permite certificar variedad, denominación de origen, <i>terroir</i>, fraude o alteraciones. ';
  url:string = 'Vinos';
  description:string = 'Qué podemos hacer';
  constructor(private imageService: ImageService) {}


  

  ngOnInit(): void {
    this.imageUrl = this.imageService.getImage(0);
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
      title: 'Wine screening mediante <sup class="pl-1">1</sup>H-NMR',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 2,
      title: 'Determinación de fraude y/o alteraciones',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 3,
      title: 'Determinación de <i>terroir</i>',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 4,
      title: 'Certificación de denominación de origen',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 5,
      title: 'Determinación de la variedad <br> <hr>',
      content: [''],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 6,
      title: '',
      content: ['Sabemos que el origen y la autenticidad de los productos alimenticios están ganando cada vez más atención, y los consumidores exigen más información sobre el origen del vino. Desafortunadamente, la detección de vino fraudulento relacionado con declaraciones de origen, regiones o variedades de uva falsas ha sido un gran desafío debido a la falta de métodos analíticos disponibles. El sistema de screening mediante resonancia magnética nuclear es una forma innovadora y poderosa de detectar y prevenir el fraude en el vino.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 7,
      title: '',
      content: ['<b>¿Cómo funciona?</b> <br> Debido a sus exclusivas capacidades "todo en uno", la espectroscopia de <sup class="pl-1">1</sup>H-NMR de alta resolución, combinada con la quimiometría estadística multivariada, es una poderosa herramienta para probar la autenticidad y la calidad del vino. Wine-Profiling puede detectar varios cientos de compuestos en una muestra de vino simultáneamente, que se utilizan para caracterizar el vino a través de una base de datos completa de vinos de referencia. La base de datos se actualiza periódicamente con nuevas variantes para la verificación geográfica y de variedades de uva, lo que proporciona una biblioteca de referencia confiable y actualizada.'],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
    {
      id: 8,
      title: '',
      content: ['<b>¿Qué informamos?</b> <br> Además de la cuantificación de los principales compuestos orgánicos presentes en el vino, la metodología tiene la capacidad de verificar la consistencia de la variedad de uva informada en vinos monovarietales y de la denominación de origen. Podés encontrar un ejemplo de informe en el siguiente link  <a href="/assets/files/wine_report.pdf" class="inline-flex items-center font-medium text-emerald-600 dark:text-emerald-500 hover:underline">Wine Report.<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a> <br>  También tenés disponible un folleto en el siguiente link. <a href="/assets/files/WineProfilingBrochure.PDF" class="inline-flex items-center font-medium text-emerald-600 dark:text-emerald-500 hover:underline">Wine Profiling Brochure.<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a> '],
      links: [
        { text: '', href: '' },
        { text: '', href: '' }
      ]
    },
  ];



  files: Logo[] = [
    { imageUrl: baseUrl + 'WineProfilingBrochure.PDF', description: 'Wine Profiling Brochure PDF' },
    { imageUrl: baseUrl + 'wine_report.pdf', description: 'Wine Report PDF' },
   // { imageUrl: baseUrl + 'VinosporRMN.docx', description: 'Vinos por RMN DOCX' }
  ];
  

}
