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
import { BioactivosParaCosmeticaApisComponent } from './components/routes/que-podemos-hacer/bioactivos-para-cosmetica/bioactivos-para-cosmetica-apis.component';
import { CannabisComponent } from './components/routes/que-podemos-hacer/cannabis/cannabis.component';
import { CultivoInVitroComponent } from './components/routes/que-podemos-hacer/cultivo-in-vitro/cultivo-in-vitro.component';
import { VinosComponent } from './components/routes/que-podemos-hacer/vinos/vinos.component';
import { AnalisisMetabolicosYProteomicosComponent } from './components/routes/que-podemos-hacer/analisis-metabolicos-y-proteomicos/analisis-metabolicos-y-proteomicos.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { PlataformaTecnologicaComponent } from './components/routes/plataforma-tecnologica/plataforma-tecnologica.component';
import { EquipamientoComponent } from './components/home/equipamiento/equipamiento.component';
const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent, data: { breadcrumb: 'Nosotros' } },
  { path: 'equipamiento', component: EquipamientoComponent, data: { breadcrumb: 'Equipamiento' } },
  { path: 'contacto', component: ContactComponent, data: { breadcrumb: 'Contacto' } },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Inicio' } }, 
  {
    path: 'laboratorios' ,
    data: { breadcrumb: 'Laboratorios' },
    children: [
      { path: 'extraccion', component: ExtraccionComponent, data: { breadcrumb: 'Extracción' } },
      { path: 'actividad-biologica', component: ActividadBiologicaComponent, data: { breadcrumb: 'Actividad Biológica' } },
      { path: 'fraccionamiento-y-purificacion', component: FraccionamientoYPurificacionComponent, data: { breadcrumb: 'Fraccionamiento y Purificación' } },
      { path: 'identificacion-y-analisis', component: IdentificacionYAnalisisComponent, data: { breadcrumb: 'Identificación y Análisis' } },
      { path: 'biotecnologia-de-cultivos-in-vitro-vegetales', component: BiotecnologiaDeCultivosInVitroVegetalesComponent, data: { breadcrumb: 'Biotecnología de Cultivos In Vitro Vegetales' } },
      { path: 'tecnologia-de-alimentos', component: TecnologiaDeAlimentosComponent, data: { breadcrumb: 'Tecnología de Alimentos' } },
      { path: 'tecnologia-farmaceutica', component: TecnologiaFarmaceuticaComponent, data: { breadcrumb: 'Tecnología Farmacéutica' } },
    ]
  },
  {
    path: 'capacidades-y-servicios',
    data: { breadcrumb: 'Capacidades y Laboratorios' },
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a una ruta hija por defecto
      { path: 'extractos', component: ExtractosComponent, data: { breadcrumb: 'Extractos' } },
      { path: 'aceites-esenciales', component: AceitesEsencialesComponent, data: { breadcrumb: 'Aceites Esenciales' } },
      { path: 'aditivos-alimentarios-y-nutraceuticos', component: AditivosAlimentariosYNutraceuticosComponent, data: { breadcrumb: 'Aditivos Alimentarios y Nutracéuticos' } },
      { path: 'bioactividad-de-sustancias-puras-y-mezclas-complejas', component: BioactividadDeSustanciasPurasYMezclasComplejasComponent, data: { breadcrumb: 'Bioactividad de Sustancias Puras y Mezclas Complejas' } },
      { path: 'bioactivos-para-cosmetica', component: BioactivosParaCosmeticaApisComponent, data: { breadcrumb: 'Bioactivos para Cosmética' } },
      { path: 'cannabis', component: CannabisComponent, data: { breadcrumb: 'Cannabis' } },
      { path: 'cultivo-in-vitro', component: CultivoInVitroComponent, data: { breadcrumb: 'Cultivo In Vitro' } },
      { path: 'vinos', component: VinosComponent, data: { breadcrumb: 'Vinos' } },
      { path: 'analisis-metabolicos-y-proteomicos', component: AnalisisMetabolicosYProteomicosComponent, data: { breadcrumb: 'Análisis Metabólicos y Proteómicos' } },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
