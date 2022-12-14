import { TestBed } from '@angular/core/testing';

import { UseractorpeliculaService } from './useractorpelicula.service';

describe('UseractorpeliculaService', () => {
  let service: UseractorpeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseractorpeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
