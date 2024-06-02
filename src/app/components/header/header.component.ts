import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';

interface logo {
  imageUrl: string
  description: string
}
let baseUrl: string = "assets/Logos_Svg/"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false;
  isSubMenuOpen = false;  // Estado para el submenú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
  }

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isSubMenuOpen = false;  // Cerrar submenú cuando se cierra el menú principal
  }

  imgs: logo[] = [
    {imageUrl: baseUrl + '7dark.png', description: 'Logo Dark' },
    {imageUrl: baseUrl + '8.png', description: 'Logo' },
   ]

  
}
