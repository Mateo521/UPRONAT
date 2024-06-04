import { TestBed } from '@angular/core/testing';

import { LanguagestatusService } from './languagestatus.service';

describe('LanguagestatusService', () => {
  let service: LanguagestatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagestatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
