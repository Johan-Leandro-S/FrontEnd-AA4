import { UseractorpeliculaService } from './../../service/useractorpelicula.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {

  public useractorpelicula = {
    "aIdActor":'',
    "aIdPelicula":''
  }

  constructor(private useractorpeliculaService:UseractorpeliculaService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("entro");
    console.log(this.useractorpelicula);
    if (this.useractorpelicula.aIdActor == '' || this.useractorpelicula.aIdActor == null){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{duration: 4000,horizontalPosition: 'right'});
      return;
    }
    this.useractorpeliculaService.insertaractorpelicula(this.useractorpelicula).subscribe(
      (data) => { console.log(data)}
                                                          );
  }

}
