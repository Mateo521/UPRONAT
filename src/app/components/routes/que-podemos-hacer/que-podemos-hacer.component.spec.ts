import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuePodemosHacerComponent } from './que-podemos-hacer.component';

describe('QuePodemosHacerComponent', () => {
  let component: QuePodemosHacerComponent;
  let fixture: ComponentFixture<QuePodemosHacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuePodemosHacerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuePodemosHacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
