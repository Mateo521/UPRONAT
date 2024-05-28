import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaTecnologicaComponent } from './plataforma-tecnologica.component';

describe('PlataformaTecnologicaComponent', () => {
  let component: PlataformaTecnologicaComponent;
  let fixture: ComponentFixture<PlataformaTecnologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlataformaTecnologicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlataformaTecnologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
