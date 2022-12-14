import { Component, OnInit } from '@angular/core';
import { ListaActor } from '../lista-actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-lista-actor',
  templateUrl: './lista-actor.component.html',
  styleUrls: ['./lista-actor.component.css']
})
export class ListaActorComponent implements OnInit {
  actores: ListaActor[];
  constructor(private actorService:ActorService) { }

  ngOnInit(): void {
    this.actorService.getAll().subscribe(
      e =>this.actores=e
    );
  }

  delete(actores:ListaActor):void{
    console.log("hello form delete");
    this.actorService.delete(actores.aIdActor).subscribe(
      res=>this.actorService.getAll().subscribe(
        Response=>this.actores=Response
      )
    );
  }

}
