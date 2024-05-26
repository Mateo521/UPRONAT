import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditivosAlimentariosYNutraceuticosComponent } from './aditivos-alimentarios-y-nutraceuticos.component';

describe('AditivosAlimentariosYNutraceuticosComponent', () => {
  let component: AditivosAlimentariosYNutraceuticosComponent;
  let fixture: ComponentFixture<AditivosAlimentariosYNutraceuticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AditivosAlimentariosYNutraceuticosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AditivosAlimentariosYNutraceuticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
