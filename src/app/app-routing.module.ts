import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/routes/nosotros/nosotros.component'; // Nueva importación
import { HomeComponent } from './components/home/home.component';

import { ExtraccionComponent } from './components/routes/laboratorios/extraccion/extraccion.component';
import { ActividadBiologicaComponent } from './components/routes/laboratorios/actividad-biologica/actividad-biologica.component';
import { FraccionamientoYPurificacionComponent } from './components/routes/laboratorios/fraccionamiento-y-purificacion/fraccionamiento-y-purificacion.component';
import { IdentificacionYAnalisisComponent } from './components/routes/laboratorios/identificacion-y-analisis/identificacion-y-analisis.component';
import { BiotecnologiaDeCultivosInVitroVegetalesComponent } from './components/routes/laboratorios/biotecnologia-de-cultivos-in-vitro-vegetales/biotecnologia-de-cultivos-in-vitro-vegetales.component';
import { TecnologiaDeAlimentosComponent } from './components/routes/laboratorios/tecnologia-de-alimentos/tecnologia-de-alimentos.component';
import { TecnologiaFarmaceuticaComponent } from './components/routes/laboratorios/tecnologia-farmaceutica/tecnologia-farmaceutica.component';


import { ExtractosComponent } from './components/routes/que-podemos-hacer/extractos/extractos.component';
const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'home', component: HomeComponent }, 
  {
    path: 'laboratorios',
    children: [
      { path: 'extraccion', component: ExtraccionComponent },
      { path: 'actividad-biologica', component: ActividadBiologicaComponent },
      { path: 'fraccionamiento-y-purificacion', component: FraccionamientoYPurificacionComponent },
      { path: 'identificacion-y-analisis', component: IdentificacionYAnalisisComponent },
      { path: 'biotecnologia-de-cultivos-in-vitro-vegetales', component: BiotecnologiaDeCultivosInVitroVegetalesComponent },
      { path: 'tecnologia-de-alimentos', component: TecnologiaDeAlimentosComponent },
      { path: 'tecnologia-farmaceutica', component: TecnologiaFarmaceuticaComponent },
    ]
  },
  {
    path: 'que-podemos-hacer',
    children: [
      { path: 'extractos', component: ExtractosComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard para manejar rutas no definidas
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
