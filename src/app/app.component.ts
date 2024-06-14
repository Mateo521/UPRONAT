import { Component, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import AOS from 'aos';
import { initFlowbite } from 'flowbite';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';





import { LanguageService } from './languagestatus.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'UPRONAT';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router,private themeService: ThemeService,private languageService: LanguageService) {

    this.themeService.initTheme();
  }

  ngAfterViewInit() {

    
    if (isPlatformBrowser(this.platformId)) {
      this.initializeScripts();

  
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.initializeScripts();
        });
    }
  }

  private initializeScripts() {
    AOS.init({ once: true, duration: 1000 });
    initFlowbite();
  }
}
