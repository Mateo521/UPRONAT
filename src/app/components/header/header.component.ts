import { Component } from '@angular/core';
import { LanguageService } from '../../languagestatus.service';

interface Logo {
  imageUrl: string;
  description: string;
}

const baseUrl: string = 'assets/Logos_Svg/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // corregir styleUrl a styleUrls
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  generateLink(route: string): string {
    return this.languageService.generateLink(route);
  }

  getLanguagePrefix(): string {
    return this.languageService.getCurrentLanguage();
  }

  getLinkText(route: string): string {
    // Obtener el texto del enlace según el idioma actual
    const currentLanguage = this.languageService.getCurrentLanguage();
    const translations: Record<string, Record<string, string>> = {
      en: {
        nosotros: 'About Us',
        equipamiento: 'Equipment',
        contacto: 'Contact',
        capacidadesyservicios:'Capabilities and services',
      },
      es: {
        nosotros: 'Nosotros',
        equipamiento: 'Equipamiento',
        contacto: 'Contacto',
        capacidadesyservicios:'Capacidades y servicios',
      }
    };
    return translations[currentLanguage][route] || route;
  }

 
  isMenuOpen = false;
  isSubMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isSubMenuOpen = false;
  }

  imgs: Logo[] = [
    { imageUrl: baseUrl + '7dark.png', description: 'Logo Dark' },
    { imageUrl: baseUrl + '8.png', description: 'Logo' },
    { imageUrl: baseUrl + 'Flag_of_Argentina.svg', description: 'Flag AR' },
    {imageUrl: baseUrl + 'logo-unsl-2-1024x578.png', description: 'Logo UNSL Dark' },
    {imageUrl: baseUrl + 'logo-unsl-negativo.png', description: 'Logo UNSL' },
  ];
}
