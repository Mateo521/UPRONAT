import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotecnologiaDeCultivosInVitroVegetalesComponent } from './biotecnologia-de-cultivos-in-vitro-vegetales.component';

describe('BiotecnologiaDeCultivosInVitroVegetalesComponent', () => {
  let component: BiotecnologiaDeCultivosInVitroVegetalesComponent;
  let fixture: ComponentFixture<BiotecnologiaDeCultivosInVitroVegetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiotecnologiaDeCultivosInVitroVegetalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiotecnologiaDeCultivosInVitroVegetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
