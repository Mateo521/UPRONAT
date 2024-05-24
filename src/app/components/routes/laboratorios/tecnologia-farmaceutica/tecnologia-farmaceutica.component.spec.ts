import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaFarmaceuticaComponent } from './tecnologia-farmaceutica.component';

describe('TecnologiaFarmaceuticaComponent', () => {
  let component: TecnologiaFarmaceuticaComponent;
  let fixture: ComponentFixture<TecnologiaFarmaceuticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecnologiaFarmaceuticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnologiaFarmaceuticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
