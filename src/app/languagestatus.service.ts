import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('es'); // Idioma predeterminado
  language$ = this.languageSubject.asObservable();

  constructor() {}

  setLanguage(language: Language) {
    this.languageSubject.next(language);
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.getValue();
  }

  generateLink(path: string): string {
    const currentLanguage = this.getCurrentLanguage();
    const translatedPath = this.translateRoute(path, currentLanguage);
    return `/${currentLanguage}/${translatedPath}`;
  }

  public translateRoute(route: string, language: Language): string {
    const routeTranslations: Record<Language, Record<string, string>> = {
      es: {
        contact: 'contacto',
        'about-us': 'nosotros',
        equipment: 'equipamiento',

        extractos: '/capacidades-y-servicios/extractos',
        Bioactivos: '/capacidades-y-servicios/bioactivos-para-cosmetica',
        Aditivos: '/capacidades-y-servicios/aditivos-alimentarios-y-nutraceuticos',
        Análisis:'/capacidades-y-servicios/analisis-metabolomicos-por-tecnicas-espectrometricas',

        Bioactividad: '/capacidades-y-servicios/bioactividad-de-sustancias-puras-y-mezclas-complejas',
        Aceites: '/capacidades-y-servicios/aceites-esenciales',
        Cannabis: '/capacidades-y-servicios/cannabis',
        Vinos:'/capacidades-y-servicios/vinos',
        Cultivo:'/capacidades-y-servicios/cultivo-in-vitro',
      },
      en: {
        extractos: '/capabilities-and-services/extracts',
        Bioactivos: '/capabilities-and-services/bioactives-for-cosmetics',
        Aditivos: '/capabilities-and-services/food-additives-and-nutraceuticals',
        Análisis:'/capabilities-and-services/metabolic-and-proteomic-analysis',

        Bioactividad: '/capabilities-and-services/bioactivity-of-pure-substances-and-complex-mixtures',
        Aceites: '/capabilities-and-services/essential-oils',
        Cannabis: '/capabilities-and-services/cannabis',
        Vinos:'/capabilities-and-services/wines',
        Cultivo:'/capabilities-and-services/in-vitro-culture',


        
      }

  
     
    };

    return routeTranslations[language][route] || route;
  }
}

