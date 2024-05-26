import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMetabolicosYProteomicosComponent } from './analisis-metabolicos-y-proteomicos.component';

describe('AnalisisMetabolicosYProteomicosComponent', () => {
  let component: AnalisisMetabolicosYProteomicosComponent;
  let fixture: ComponentFixture<AnalisisMetabolicosYProteomicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisMetabolicosYProteomicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisMetabolicosYProteomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
