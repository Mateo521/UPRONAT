import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionYAnalisisComponent } from './identificacion-y-analisis.component';

describe('IdentificacionYAnalisisComponent', () => {
  let component: IdentificacionYAnalisisComponent;
  let fixture: ComponentFixture<IdentificacionYAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificacionYAnalisisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificacionYAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
