import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-equipamiento',
  templateUrl: './equipamiento.component.html',
  styleUrl: './equipamiento.component.css'
})
export class EquipamientoComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'Equipamiento';
    const pageDescription = 'Laboratorios de extracción, fraccionamiento y purificación, laboratorio de identificación y análisis, laboratorio de biotecnología de cultivos in vitro vegetales y laboratorio de actividades biológicas';

    this.titleService.setTitle(pageTitle);


    this.metaService.updateTag({
      name: 'description',
      content: pageDescription
    });
  }
}



