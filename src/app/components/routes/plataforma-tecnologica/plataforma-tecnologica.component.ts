import { Component } from '@angular/core';

@Component({
  selector: 'app-plataforma-tecnologica',
  templateUrl: './plataforma-tecnologica.component.html',
  styleUrl: './plataforma-tecnologica.component.css'
})
export class PlataformaTecnologicaComponent {

  menuItems = [
    { label: 'Preparación, fraccionamiento y análisis de extractos a partir de biomasa vegetal, residuos agroindustriales y cultivos microbianos', classes: 'rounded-t-lg', link:'extractos' },
    { label: 'Obtención y caracterización de aceites esenciales, hidrolatos y extractos volátiles ', classes: '', link:'aceites-esenciales'},
    { label: 'Obtención de bioproductos derivados de biomasa de cáñamo y cannabis', classes: '', link:'cannabis' },
    { label: 'Análisis químicos, microbiológicos y moleculares para asegurar la calidad e inocuidad de derivados del cannabis', classes: '', link:'cannabis' },
    { label: 'Extracción, purificación y caracterización de bioactivos a partir de biomasa vegetal y microbiana', classes: '', link:'bioactivos-para-cosmetica' },
    { label: 'Recuperación de ingredientes a partir de subproductos agroalimenticios', classes: '', link:'aditivos-alimentarios-y-nutraceuticos' },
    { label: 'Análisis de vinos mediante  <sup class="pl-1"> 1</sup> H-NMR Wine screening', classes: '' , link:'vinos'},
    { label: 'Análisis metabolómicos técnicas espectrométricas (RMN y EM)', classes: '' , link:'analisis-metabolicos-y-proteomicos'},
    { label: 'Establecimiento, producción y caracterización de cultivos de células madres vegetales ', classes: '' , link:'cultivo-in-vitro'},
    { label: 'Análisis de bioactividad y toxicidad de sustancias puras y mezclas complejas', classes: 'rounded-b-lg', link:'bioactividad-de-sustancias-puras-y-mezclas-complejas' }
    
  ];


  

}
