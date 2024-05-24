import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraccionamientoYPurificacionComponent } from './fraccionamiento-y-purificacion.component';

describe('FraccionamientoYPurificacionComponent', () => {
  let component: FraccionamientoYPurificacionComponent;
  let fixture: ComponentFixture<FraccionamientoYPurificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FraccionamientoYPurificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraccionamientoYPurificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
