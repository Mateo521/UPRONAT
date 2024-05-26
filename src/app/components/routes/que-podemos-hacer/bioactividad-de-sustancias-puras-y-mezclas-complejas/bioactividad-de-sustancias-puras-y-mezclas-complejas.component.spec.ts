import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioactividadDeSustanciasPurasYMezclasComplejasComponent } from './bioactividad-de-sustancias-puras-y-mezclas-complejas.component';

describe('BioactividadDeSustanciasPurasYMezclasComplejasComponent', () => {
  let component: BioactividadDeSustanciasPurasYMezclasComplejasComponent;
  let fixture: ComponentFixture<BioactividadDeSustanciasPurasYMezclasComplejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioactividadDeSustanciasPurasYMezclasComplejasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioactividadDeSustanciasPurasYMezclasComplejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
