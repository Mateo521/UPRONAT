import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioactivosParaCosmeticaApisComponent } from './bioactivos-para-cosmetica-apis.component';

describe('BioactivosParaCosmeticaApisComponent', () => {
  let component: BioactivosParaCosmeticaApisComponent;
  let fixture: ComponentFixture<BioactivosParaCosmeticaApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioactivosParaCosmeticaApisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioactivosParaCosmeticaApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
