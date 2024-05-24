import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
