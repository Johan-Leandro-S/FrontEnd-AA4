import { TestBed } from '@angular/core/testing';

import { UseractorService } from './useractor.service';

describe('UseractorService', () => {
  let service: UseractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
