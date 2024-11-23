import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'home-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrige el campo: 'styleUrl' -> 'styleUrls'
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'Contacto';
    const pageDescription = '¿Necesitas más información?';

    // Configurar título dinámico
    this.titleService.setTitle(pageTitle);

    // Configurar meta descripción dinámica
    this.metaService.updateTag({
      name: 'description',
      content: pageDescription
    });
  }
}
