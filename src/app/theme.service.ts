import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkThemeClass = 'dark';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  initTheme() {
    if (this.isBrowser && this.isLocalStorageAvailable()) {
      const theme = localStorage.getItem('color-theme');
      console.log('Initial theme:', theme); // Log initial theme
      if (
        theme === 'dark' ||
        (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add(this.darkThemeClass);
      } else {
        document.documentElement.classList.remove(this.darkThemeClass);
      }
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      if (this.isLocalStorageAvailable()) {
        if (document.documentElement.classList.contains(this.darkThemeClass)) {
          document.documentElement.classList.remove(this.darkThemeClass);
          localStorage.setItem('color-theme', 'light');
          console.log('Switched to light theme'); // Log theme change
        } else {
          document.documentElement.classList.add(this.darkThemeClass);
          localStorage.setItem('color-theme', 'dark');
          console.log('Switched to dark theme'); // Log theme change
        }
      } else {
        if (document.documentElement.classList.contains(this.darkThemeClass)) {
          document.documentElement.classList.remove(this.darkThemeClass);
          console.log('Switched to light theme (no local storage)'); // Log theme change
        } else {
          document.documentElement.classList.add(this.darkThemeClass);
          console.log('Switched to dark theme (no local storage)'); // Log theme change
        }
      }
    }
  }

  isDarkTheme(): boolean {
    return this.isBrowser ? document.documentElement.classList.contains(this.darkThemeClass) : false;
  }
}
