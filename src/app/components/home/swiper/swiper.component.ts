import { Component } from '@angular/core';
import { LanguageService } from '../../../languagestatus.service';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
interface slide {
  imageUrl: string
  description: string
  subtitle:string
  route:string
}

let baseUrl: string = "assets/img/carrusel/"

@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
  encapsulation: ViewEncapsulation.None ,
  
})
export class SwiperComponent  implements OnInit{

  constructor(private languageService: LanguageService) {}

 
  ngOnInit(): void {
  }    
  
  generateLink(route: string): string {
    return this.languageService.generateLink(route);
  }

  getLanguagePrefix(): string {
    return this.languageService.getCurrentLanguage();
  }



  slides: slide[] = [
    { imageUrl: baseUrl + 'unsl-cannabis-05.png', description: 'Cannabis', subtitle :'En el marco del PROGRAMA CANNABIS-UNSL procesamos tu biomasa para obtener bioproductos derivados de cáñamo y de cannabis. Realizamos análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de tu producto.' ,route: '/'+this.generateLink('Cannabis')},
    { imageUrl: baseUrl + 'img(15).jpeg', description: 'Extractos vegetales' , subtitle :'Preparamos extractos a partir de tu biomasa usando solventes verdes o fluidos supercríticos y los caracterizamos mediante tecnologías analíticas de alta complejidad    ', route: '/'+this.generateLink('extractos')},
    { imageUrl: baseUrl + 'img(4).jpeg', description: 'Aceites esenciales', subtitle :'Obtenemos aceites esenciales por destilación por arrastre de vapor y por tecnología supercrítica y los caracterizamos cuali y cuantitativamente' ,route: '/'+this.generateLink('Aceites')},
    { imageUrl: baseUrl + 'img(6).jpeg', description: 'Análisis metabolómicos por técnicas espectrométricas' , subtitle :'Podemos analizar la presencia de metabolitos especializados por distintas técnicas como Resonancia Magnética Nuclear (RMN), Espectrometría de Masas (EM) y Cromatografía Líquida de Alta Eficiencia (HPLC)',route: '/'+this.generateLink('Análisis')},
    { imageUrl: baseUrl + 'img(25).jpg', description: 'Vinos' , subtitle :'Analizamos vinos mediante una tecnología única en Sudamérica (<sup>1</sup>H-NMR Wine screening) que permite certificar variedad, denominación de origen, <i>terroir</i>, fraude o alteraciones.  ',route: '/'+this.generateLink('Vinos')},
    { imageUrl: baseUrl + 'img%20(9).jpg', description: 'Cultivo in vitro', subtitle :'Obtenemos cultivos de células madres vegetales para la elaboración de productos cosméticos y nutracéuticos. \n\n Aislamos e identificamos macroorganismos para aplicaciones biotecnológicas.' ,route: '/'+this.generateLink('Cultivo')},


    { imageUrl: baseUrl + 'img(13).jpeg', description: 'Bioactivos para cosmética' , subtitle :'Extraemos, purificamos y caracterizamos bioactivos a partir de biomasa vegetal y microbiana. Recuperamos ingredientes a partir de subproductos agroalimenticios.',route: '/'+this.generateLink('Bioactivos')},
    { imageUrl: baseUrl + 'img(11).jpeg', description: 'Aditivos alimentarios  y nutraceúticos' , subtitle :'Extraemos, purificamos y caracterizamos compuestos con valor nutricional a partir de biomasa vegetal y microbiana. Recuperamos ingredientes y sustancias nutraceúticas a partir de subproductos agroalimenticios.',route: '/'+this.generateLink('Aditivos')},
    { imageUrl: baseUrl + 'img(18).jpeg', description: 'Bioactividad de sustancias puras y mezclas complejas' , subtitle :'Analizamos la bioactividad y toxicidad de sustancias puras y mezclas complejas    ',route: '/'+this.generateLink('Bioactividad')},

    { imageUrl: baseUrl + 'img.jpeg', description: 'Asesoramiento y análisis bioinformático de datos proteómicos' , subtitle :'Asesoramos en diseño de experimentos para estudios proteómicos, extracción de proteínas a partir de muestras biológicas y ofrecemos análisis bioinformático de datos de masas obtenidos a partir de servicios tercerizados.',route: '/'+this.generateLink('Bioinformatica')},
      ]



  
}
/*
extractos: '/capacidades-y-servicios/extractos',
Bioactivos: '/capacidades-y-servicios/bioactivos-para-cosmetica',
Aditivos: '/capacidades-y-servicios/aditivos-alimentarios-y-nutraceuticos',
Análisis:'/capacidades-y-servicios/analisis-metabolicos-y-proteomicos',

Bioactividad: '/capacidades-y-servicios/bioactividad-de-sustancias-puras-y-mezclas-complejas',
Aceites: '/capacidades-y-servicios/aceites-esenciales',
Cannabis: '/capacidades-y-servicios/cannabis',
Vinos:'/capacidades-y-servicios/vinos',
Cultivo:'/capacidades-y-servicios/cultivo-in-vitro',*/