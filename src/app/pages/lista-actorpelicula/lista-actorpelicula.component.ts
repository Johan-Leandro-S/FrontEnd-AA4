import { Component, OnInit } from '@angular/core';
import { ListaActorpelicula } from '../lista-actorpelicula';
import { ActorpeliculaService } from 'src/app/service/actorpelicula.service';

@Component({
  selector: 'app-lista-actorpelicula',
  templateUrl: './lista-actorpelicula.component.html',
  styleUrls: ['./lista-actorpelicula.component.css']
})
export class ListaActorpeliculaComponent implements OnInit {
  actorespeliculas: ListaActorpelicula[];
  constructor(private actorpeliculaService:ActorpeliculaService) { }

  ngOnInit(): void {
    this.actorpeliculaService.getAll().subscribe(
      e =>this.actorespeliculas=e
    );
  }

  delete(actorespeliculas:ListaActorpelicula):void{
    console.log("Se elimino correctamente");
    this.actorpeliculaService.delete(actorespeliculas.aIdActorpelicula).subscribe(
      res=>this.actorpeliculaService.getAll().subscribe(
        Response=>this.actorespeliculas=Response
      )
    );
  }


}
