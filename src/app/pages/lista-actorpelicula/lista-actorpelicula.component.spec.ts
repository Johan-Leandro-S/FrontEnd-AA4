import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActorpeliculaComponent } from './lista-actorpelicula.component';

describe('ListaActorpeliculaComponent', () => {
  let component: ListaActorpeliculaComponent;
  let fixture: ComponentFixture<ListaActorpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaActorpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaActorpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
