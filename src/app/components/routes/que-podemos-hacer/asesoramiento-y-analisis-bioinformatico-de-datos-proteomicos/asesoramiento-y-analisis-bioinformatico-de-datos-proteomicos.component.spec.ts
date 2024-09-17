import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent } from './asesoramiento-y-analisis-bioinformatico-de-datos-proteomicos.component';

describe('AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent', () => {
  let component: AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent;
  let fixture: ComponentFixture<AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoramientoYAnalisisBioinformaticoDeDatosProteomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
