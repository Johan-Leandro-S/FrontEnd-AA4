import { TestBed } from '@angular/core/testing';

import { ActorpeliculaService } from './actorpelicula.service';

describe('ActorpeliculaService', () => {
  let service: ActorpeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorpeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
