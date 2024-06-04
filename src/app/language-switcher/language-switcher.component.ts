import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../languagestatus.service';

interface Logo {
  imageUrl: string;
  description: string;
}

const baseUrl: string = 'assets/Logos_Svg/';
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  selectedLanguage: string = 'es';
  selectedLanguageText: string = 'Español (ES)';

  constructor(private router: Router, private languageService: LanguageService) { 
    this.languageService.language$.subscribe(language => {
      this.selectedLanguage = language;
      this.selectedLanguageText = language === 'en' ? 'English (US)' : 'Español (ES)';
    });
  }

  switchLanguage(language: 'en' | 'es'): void {
    this.languageService.setLanguage(language);
    this.router.navigate([`/${language}/home`]);
  }

  imgs: Logo[] = [
    { imageUrl: baseUrl + 'Flag_of_Argentina.svg', description: 'Flag AR' }
  ];
}
