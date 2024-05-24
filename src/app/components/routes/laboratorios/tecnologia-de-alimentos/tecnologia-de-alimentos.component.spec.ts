import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaDeAlimentosComponent } from './tecnologia-de-alimentos.component';

describe('TecnologiaDeAlimentosComponent', () => {
  let component: TecnologiaDeAlimentosComponent;
  let fixture: ComponentFixture<TecnologiaDeAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecnologiaDeAlimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnologiaDeAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
