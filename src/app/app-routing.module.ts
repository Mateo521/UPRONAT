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
  {
    path: 'en',
    children: [
      { path: 'about-us', component: NosotrosComponent, data: { breadcrumb: 'About Us' } },
      { path: 'equipment', component: EquipamientoComponent, data: { breadcrumb: 'Equipment' } },
      { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' } },
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
      {
        path: 'labs',
        data: { breadcrumb: 'Labs' },
        children: [
          { path: 'extraction', component: ExtraccionComponent, data: { breadcrumb: 'Extraction' } },
          { path: 'biological-activity', component: ActividadBiologicaComponent, data: { breadcrumb: 'Biological Activity' } },
          { path: 'fractionation-and-purification', component: FraccionamientoYPurificacionComponent, data: { breadcrumb: 'Fractionation and Purification' } },
          { path: 'identification-and-analysis', component: IdentificacionYAnalisisComponent, data: { breadcrumb: 'Identification and Analysis' } },
          { path: 'in-vitro-plant-biotechnology', component: BiotecnologiaDeCultivosInVitroVegetalesComponent, data: { breadcrumb: 'In Vitro Plant Biotechnology' } },
          { path: 'food-technology', component: TecnologiaDeAlimentosComponent, data: { breadcrumb: 'Food Technology' } },
          { path: 'pharmaceutical-technology', component: TecnologiaFarmaceuticaComponent, data: { breadcrumb: 'Pharmaceutical Technology' } },
        ]
      },
      {
        path: 'capabilities-and-services',
        data: { breadcrumb: 'Capabilities and Services' },
        children: [
          { path: '', redirectTo: '/en/home', pathMatch: 'full' },
          { path: 'extracts', component: ExtractosComponent, data: { breadcrumb: 'Extracts' } },
          { path: 'essential-oils', component: AceitesEsencialesComponent, data: { breadcrumb: 'Essential Oils' } },
          { path: 'food-additives-and-nutraceuticals', component: AditivosAlimentariosYNutraceuticosComponent, data: { breadcrumb: 'Food Additives and Nutraceuticals' } },
          { path: 'bioactivity-of-pure-substances-and-complex-mixtures', component: BioactividadDeSustanciasPurasYMezclasComplejasComponent, data: { breadcrumb: 'Bioactivity of Pure Substances and Complex Mixtures' } },
          { path: 'bioactives-for-cosmetics', component: BioactivosParaCosmeticaApisComponent, data: { breadcrumb: 'Bioactives for Cosmetics' } },
          { path: 'cannabis', component: CannabisComponent, data: { breadcrumb: 'Cannabis' } },
          { path: 'in-vitro-culture', component: CultivoInVitroComponent, data: { breadcrumb: 'In Vitro Culture' } },
          { path: 'wines', component: VinosComponent, data: { breadcrumb: 'Wines' } },
          { path: 'metabolic-and-proteomic-analysis', component: AnalisisMetabolicosYProteomicosComponent, data: { breadcrumb: 'Metabolic and Proteomic Analysis' } },
        ]
      },
      { path: '', redirectTo: '/en/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/en/home' }
    ]
  },
  {
    path: 'es',
    children: [
      { path: 'nosotros', component: NosotrosComponent, data: { breadcrumb: 'Nosotros' } },
      { path: 'equipamiento', component: EquipamientoComponent, data: { breadcrumb: 'Equipamiento' } },
      { path: 'contacto', component: ContactComponent, data: { breadcrumb: 'Contacto' } },
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Inicio' } },
      {
        path: 'laboratorios',
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
        data: { breadcrumb: 'Capacidades y Servicios' },
        children: [
          { path: '', redirectTo: '/es/home', pathMatch: 'full' },
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
      { path: '', redirectTo: '/es/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/es/home' }
    ]
  },
  { path: '', redirectTo: '/es/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/es/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
