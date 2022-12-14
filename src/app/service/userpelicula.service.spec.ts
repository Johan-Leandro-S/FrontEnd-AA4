import { TestBed } from '@angular/core/testing';

import { UserpeliculaService } from './userpelicula.service';

describe('UserpeliculaService', () => {
  let service: UserpeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
