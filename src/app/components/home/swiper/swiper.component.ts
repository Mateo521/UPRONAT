import { Component } from '@angular/core';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


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
  
})
export class SwiperComponent {


  slides: slide[] = [
    { imageUrl: baseUrl + 'img(14).jpeg', description: 'Extractos vegetales' , subtitle :'Preparamos extractos a partir de tu biomasa usando solventes verdes o fluidos supercríticos y los caracterizamos mediante tecnologías analíticas de alta complejidad    ', route:'/que-podemos-hacer/extractos'},
    { imageUrl: baseUrl + 'img(13).jpeg', description: 'Bioactivos para cosmética/APIS' , subtitle :'Extraemos, purificamos y caracterizamos bioactivos a partir de biomasa vegetal y microbiana. Recuperamos ingredientes a partir de subproductos agroalimenticios.',route:'/que-podemos-hacer/bioactivos-para-cosmetica-apis'},
    { imageUrl: baseUrl + 'img%20(2).jpeg', description: 'Aditivos alimentarios  y nutraceúticos' , subtitle :'Extraemos, purificamos y caracterizamos compuestos con valor nutricional a partir de biomasa vegetal y microbiana. Recuperamos ingredientes y sustancias nutraceúticas a partir de subproductos agroalimenticios.',route:'/que-podemos-hacer/aditivos-alimentarios-y-nutraceuticos'},
    { imageUrl: baseUrl + 'img%20(3).jpeg', description: 'Análisis metabolólicos y proteómicos' , subtitle :'Podemos analizar la presencia de metabolitos especializados por RMN y la expresión de proteínas vegetales y microbianas en tus muestras',route:'/que-podemos-hacer/analisis-metabolicos-y-proteomicos'},
    { imageUrl: baseUrl + 'img%20(4).jpeg', description: 'Bioactividad de sustancias puras y mezclas complejas' , subtitle :'Analizamos la bioactividad y toxicidad de sustancias puras y mezclas complejas    ',route:'/que-podemos-hacer/bioactividad-de-sustancias-puras-y-mezclas-complejas'},
    { imageUrl: baseUrl + 'img(4).jpeg', description: 'Aceites esenciales', subtitle :'Obtenemos aceites esenciales por destilación por arrastre de vapor y por tecnología supercrítica y los caracterizamos cuali y cuantitativamente' ,route:'/que-podemos-hacer/aceites-esenciales'},
    { imageUrl: baseUrl + 'img(16).png', description: 'Cannabis', subtitle :'En el marco del PROGRAMA CANNABIS-UNSL procesamos tu biomasa para obtener bioproductos derivados de cáñamo y de cannabis. Realizamos análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de tu producto.' ,route:'/que-podemos-hacer/cannabis'},
    { imageUrl: baseUrl + 'img(17).jpeg', description: 'Vinos' , subtitle :'Analizamos vinos mediante una tecnología única en Sudamérica (1H-NMR Wine screening) que permite certificar variedad, denominación de origen, terroir, añada, fraude o alteraciones e inscribirlos en una base de datos mundial. Estamos trabajando para incorporar por primera vez al Malbec argentino a la base de datos mundial de vinos por RMN ',route:'/que-podemos-hacer/vinos'},
    { imageUrl: baseUrl + 'img%20(9).jpg', description: 'Cultivo in vitro', subtitle :'Obtenemos cultivos de células madres vegetales para la elaboración de productos cosméticos y nutracéuticos' ,route:'/que-podemos-hacer/cultivo-in-vitro'},
  ]



  
}
