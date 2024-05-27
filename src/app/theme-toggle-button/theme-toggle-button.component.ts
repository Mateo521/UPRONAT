import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.css'],
})
export class ThemeToggleButtonComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.updateIcons();
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      this.themeService.toggleTheme();
      this.updateIcons();
    }
  }

  private updateIcons() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (this.themeService.isDarkTheme()) {
      themeToggleLightIcon?.classList.remove('hidden');
      themeToggleDarkIcon?.classList.add('hidden');
    } else {
      themeToggleDarkIcon?.classList.remove('hidden');
      themeToggleLightIcon?.classList.add('hidden');
    }
  }
}
