import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/routes/nosotros/nosotros.component'; 
import { HomeComponent } from './components/home/home.component';

import { ExtraccionComponent } from './components/routes/laboratorios/extraccion/extraccion.component';
import { ActividadBiologicaComponent } from './components/routes/laboratorios/actividad-biologica/actividad-biologica.component';
import { FraccionamientoYPurificacionComponent } from './components/routes/laboratorios/fraccionamiento-y-purificacion/fraccionamiento-y-purificacion.component';
import { IdentificacionYAnalisisComponent } from './components/routes/laboratorios/identificacion-y-analisis/identificacion-y-analisis.component';
import { BiotecnologiaDeCultivosInVitroVegetalesComponent } from './components/routes/laboratorios/biotecnologia-de-cultivos-in-vitro-vegetales/biotecnologia-de-cultivos-in-vitro-vegetales.component';
import { TecnologiaDeAlimentosComponent } from './components/routes/laboratorios/tecnologia-de-alimentos/tecnologia-de-alimentos.component';
import { TecnologiaFarmaceuticaComponent } from './components/routes/laboratorios/tecnologia-farmaceutica/tecnologia-farmaceutica.component';


import { ExtractosComponent } from './components/routes/que-podemos-hacer/extractos/extractos.component';
import { AceitesEsencialesComponent } from './components/routes/que-podemos-hacer/aceites-esenciales/aceites-esenciales.component';
import { AditivosAlimentariosYNutraceuticosComponent } from './components/routes/que-podemos-hacer/aditivos-alimentarios-y-nutraceuticos/aditivos-alimentarios-y-nutraceuticos.component';
import { BioactividadDeSustanciasPurasYMezclasComplejasComponent } from './components/routes/que-podemos-hacer/bioactividad-de-sustancias-puras-y-mezclas-complejas/bioactividad-de-sustancias-puras-y-mezclas-complejas.component';
import { BioactivosParaCosmeticaApisComponent } from './components/routes/que-podemos-hacer/bioactivos-para-cosmetica-apis/bioactivos-para-cosmetica-apis.component';
import { CannabisComponent } from './components/routes/que-podemos-hacer/cannabis/cannabis.component';
import { CultivoInVitroComponent } from './components/routes/que-podemos-hacer/cultivo-in-vitro/cultivo-in-vitro.component';
import { VinosComponent } from './components/routes/que-podemos-hacer/vinos/vinos.component';
import { AnalisisMetabolicosYProteomicosComponent } from './components/routes/que-podemos-hacer/analisis-metabolicos-y-proteomicos/analisis-metabolicos-y-proteomicos.component';
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
      { path: 'aceites-esenciales', component: AceitesEsencialesComponent },
      { path: 'aditivos-alimentarios-y-nutraceuticos', component: AditivosAlimentariosYNutraceuticosComponent },
      { path: 'bioactividad-de-sustancias-puras-y-mezclas-complejas', component: BioactividadDeSustanciasPurasYMezclasComplejasComponent },
      { path: 'bioactivos-para-cosmetica-apis', component: BioactivosParaCosmeticaApisComponent },
      { path: 'cannabis', component: CannabisComponent },
      { path: 'cultivo-in-vitro', component: CultivoInVitroComponent },
      { path: 'vinos', component: VinosComponent },
      { path: 'analisis-metabolicos-y-proteomicos', component: AnalisisMetabolicosYProteomicosComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard para manejar rutas no definidas
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
