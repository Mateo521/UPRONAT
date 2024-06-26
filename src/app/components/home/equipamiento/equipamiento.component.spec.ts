import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamientoComponent } from './equipamiento.component';

describe('EquipamientoComponent', () => {
  let component: EquipamientoComponent;
  let fixture: ComponentFixture<EquipamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
