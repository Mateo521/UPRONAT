import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivoInVitroComponent } from './cultivo-in-vitro.component';

describe('CultivoInVitroComponent', () => {
  let component: CultivoInVitroComponent;
  let fixture: ComponentFixture<CultivoInVitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CultivoInVitroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CultivoInVitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
