import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; // Importa HashLocationStrategy



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SwiperComponent } from './components/home/swiper/swiper.component';
import { NosotrosComponent } from './components/routes/nosotros/nosotros.component';
import { ExtraccionComponent } from './components/routes/laboratorios/extraccion/extraccion.component';
import { ActividadBiologicaComponent } from './components/routes/laboratorios/actividad-biologica/actividad-biologica.component';
import { FraccionamientoYPurificacionComponent } from './components/routes/laboratorios/fraccionamiento-y-purificacion/fraccionamiento-y-purificacion.component';
import { IdentificacionYAnalisisComponent } from './components/routes/laboratorios/identificacion-y-analisis/identificacion-y-analisis.component';
import { BiotecnologiaDeCultivosInVitroVegetalesComponent } from './components/routes/laboratorios/biotecnologia-de-cultivos-in-vitro-vegetales/biotecnologia-de-cultivos-in-vitro-vegetales.component';
import { TecnologiaDeAlimentosComponent } from './components/routes/laboratorios/tecnologia-de-alimentos/tecnologia-de-alimentos.component';
import { TecnologiaFarmaceuticaComponent } from './components/routes/laboratorios/tecnologia-farmaceutica/tecnologia-farmaceutica.component';
import { ExtractosComponent } from './components/routes/que-podemos-hacer/extractos/extractos.component';
import { BioactivosParaCosmeticaApisComponent } from './components/routes/que-podemos-hacer/bioactivos-para-cosmetica/bioactivos-para-cosmetica-apis.component';
import { AditivosAlimentariosYNutraceuticosComponent } from './components/routes/que-podemos-hacer/aditivos-alimentarios-y-nutraceuticos/aditivos-alimentarios-y-nutraceuticos.component';
import { AnalisisMetabolicosYProteomicosComponent } from './components/routes/que-podemos-hacer/analisis-metabolicos-y-proteomicos/analisis-metabolicos-y-proteomicos.component';
import { BioactividadDeSustanciasPurasYMezclasComplejasComponent } from './components/routes/que-podemos-hacer/bioactividad-de-sustancias-puras-y-mezclas-complejas/bioactividad-de-sustancias-puras-y-mezclas-complejas.component';
import { AceitesEsencialesComponent } from './components/routes/que-podemos-hacer/aceites-esenciales/aceites-esenciales.component';
import { CannabisComponent } from './components/routes/que-podemos-hacer/cannabis/cannabis.component';
import { CultivoInVitroComponent } from './components/routes/que-podemos-hacer/cultivo-in-vitro/cultivo-in-vitro.component';
import { VinosComponent } from './components/routes/que-podemos-hacer/vinos/vinos.component';
import { ThemeToggleButtonComponent } from './theme-toggle-button/theme-toggle-button.component';
import { CommonModule } from '@angular/common';
import { PlataformaTecnologicaComponent } from './components/routes/plataforma-tecnologica/plataforma-tecnologica.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { QuePodemosHacerComponent } from './components/routes/que-podemos-hacer/que-podemos-hacer.component';
import { EquipamientoComponent } from './components/home/equipamiento/equipamiento.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent } from './components/routes/que-podemos-hacer/asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos/asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos.component'; // Importa CommonModule
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiciosComponent,
    BannerComponent,
    SwiperComponent,
    NosotrosComponent,
    ExtraccionComponent,
    ActividadBiologicaComponent,
    FraccionamientoYPurificacionComponent,
    IdentificacionYAnalisisComponent,
    BiotecnologiaDeCultivosInVitroVegetalesComponent,
    TecnologiaDeAlimentosComponent,
    TecnologiaFarmaceuticaComponent,
    ExtractosComponent,
    BioactivosParaCosmeticaApisComponent,
    AditivosAlimentariosYNutraceuticosComponent,
    AnalisisMetabolicosYProteomicosComponent,
    BioactividadDeSustanciasPurasYMezclasComplejasComponent,
    AceitesEsencialesComponent,
    CannabisComponent,
    CultivoInVitroComponent,
    VinosComponent,
    ThemeToggleButtonComponent,
    PlataformaTecnologicaComponent,
    BreadcrumbComponent,
    QuePodemosHacerComponent,
    EquipamientoComponent,
    LanguageSwitcherComponent,
    AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Configura el proveedor para usar HashLocationStrategy

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
