import { Component, OnInit } from '@angular/core';
import { ListaPelicula } from '../lista-pelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.css']
})
export class ListaPeliculaComponent implements OnInit {
  peliculas: ListaPelicula[];
  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.getAll().subscribe(
      e =>this.peliculas=e
    );
  }

  delete(peliculas:ListaPelicula):void{
    console.log("Se elimino correctamente");
    this.peliculaService.delete(peliculas.aIdPelicula).subscribe(
      res=>this.peliculaService.getAll().subscribe(
        Response=>this.peliculas=Response
      )
    );
  }

}
