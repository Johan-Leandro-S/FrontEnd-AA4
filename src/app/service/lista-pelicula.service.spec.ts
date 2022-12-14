import { TestBed } from '@angular/core/testing';

import { ListaPeliculaService } from './lista-pelicula.service';

describe('ListaPeliculaService', () => {
  let service: ListaPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
