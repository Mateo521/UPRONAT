import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitesEsencialesComponent } from './aceites-esenciales.component';

describe('AceitesEsencialesComponent', () => {
  let component: AceitesEsencialesComponent;
  let fixture: ComponentFixture<AceitesEsencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AceitesEsencialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AceitesEsencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
