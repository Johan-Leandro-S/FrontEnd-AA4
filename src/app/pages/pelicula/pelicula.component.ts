import { UserpeliculaService } from './../../service/userpelicula.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public userpelicula = {
    "aIdTitulo":'',
    "aCategoria":''
  }

  constructor(private userpeliculaService:UserpeliculaService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("entro");
    console.log(this.userpelicula);
    if (this.userpelicula.aIdTitulo == '' || this.userpelicula.aIdTitulo == null){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{duration: 4000,horizontalPosition: 'right'});
      return;
    }
    this.userpeliculaService.insertarpelicula(this.userpelicula).subscribe(
      (data) => { console.log(data)}
                                                          );
  }

}
