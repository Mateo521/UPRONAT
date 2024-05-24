import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadBiologicaComponent } from './actividad-biologica.component';

describe('ActividadBiologicaComponent', () => {
  let component: ActividadBiologicaComponent;
  let fixture: ComponentFixture<ActividadBiologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActividadBiologicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadBiologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
