import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../image.service';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';

@Component({
  selector: 'app-actividad-biologica',
  templateUrl: './actividad-biologica.component.html',
  styleUrl: './actividad-biologica.component.css'
})
export class ActividadBiologicaComponent {
  url:string = 'Actividad biológica';
  description:string = 'Laboratorios';




}
