import { Component } from '@angular/core';

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

  
  ngOnInit(): void {
  }    
  

  slides: slide[] = [
    { imageUrl: baseUrl + 'img(15).jpeg', description: 'Extractos vegetales' , subtitle :'Preparamos extractos a partir de tu biomasa usando solventes verdes o fluidos supercríticos y los caracterizamos mediante tecnologías analíticas de alta complejidad    ', route:'/capacidades-y-servicios/extractos'},
    { imageUrl: baseUrl + 'img(13).jpeg', description: 'Bioactivos para cosmética' , subtitle :'Extraemos, purificamos y caracterizamos bioactivos a partir de biomasa vegetal y microbiana. Recuperamos ingredientes a partir de subproductos agroalimenticios.',route:'/capacidades-y-servicios/bioactivos-para-cosmetica'},
    { imageUrl: baseUrl + 'img(19).jpeg', description: 'Aditivos alimentarios  y nutraceúticos' , subtitle :'Extraemos, purificamos y caracterizamos compuestos con valor nutricional a partir de biomasa vegetal y microbiana. Recuperamos ingredientes y sustancias nutraceúticas a partir de subproductos agroalimenticios.',route:'/capacidades-y-servicios/aditivos-alimentarios-y-nutraceuticos'},
    { imageUrl: baseUrl + 'img%20(3).jpeg', description: 'Análisis metabolómicos por RMN' , subtitle :'Podemos analizar la presencia de metabolitos especializados por distintas técnicas de Resonancia Magnética Nuclear.',route:'/capacidades-y-servicios/analisis-metabolicos-y-proteomicos'},
    { imageUrl: baseUrl + 'img(18).jpeg', description: 'Bioactividad de sustancias puras y mezclas complejas' , subtitle :'Analizamos la bioactividad y toxicidad de sustancias puras y mezclas complejas    ',route:'/capacidades-y-servicios/bioactividad-de-sustancias-puras-y-mezclas-complejas'},
    { imageUrl: baseUrl + 'img(4).jpeg', description: 'Aceites esenciales', subtitle :'Obtenemos aceites esenciales por destilación por arrastre de vapor y por tecnología supercrítica y los caracterizamos cuali y cuantitativamente' ,route:'/capacidades-y-servicios/aceites-esenciales'},
    { imageUrl: baseUrl + 'img(16).png', description: 'Cannabis', subtitle :'En el marco del PROGRAMA CANNABIS-UNSL procesamos tu biomasa para obtener bioproductos derivados de cáñamo y de cannabis. Realizamos análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de tu producto.' ,route:'/capacidades-y-servicios/cannabis'},
    { imageUrl: baseUrl + 'img(17).jpeg', description: 'Vinos' , subtitle :'Analizamos vinos mediante una tecnología única en Sudamérica <br> (<sup class="pl-1"> 1</sup> H-NMR Wine screening) que permite certificar variedad, denominación de origen, terroir, fraude o alteraciones e inscribirlos en una base de datos mundial. <br>  Estamos trabajando para incorporar por primera vez al Malbec argentino a la base de datos mundial de vinos por RMN.   ',route:'/capacidades-y-servicios/vinos'},
    { imageUrl: baseUrl + 'img%20(9).jpg', description: 'Cultivo in vitro', subtitle :'Obtenemos cultivos de células madres vegetales para la elaboración de productos cosméticos y nutracéuticos. \n\n Aislamos e identificamos macroorganismos para aplicaciones biotecnológicas.' ,route:'/capacidades-y-servicios/cultivo-in-vitro'},
  ]



  
}
