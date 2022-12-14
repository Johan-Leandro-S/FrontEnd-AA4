import { UseractorService } from './../../service/useractor.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  public useractor = {
    "aNombreactor":'',
    "aApellido":''
  }

  constructor(private useractorService:UseractorService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("entro");
    console.log(this.useractor);
    if (this.useractor.aNombreactor == '' || this.useractor.aNombreactor == null){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{duration: 4000,horizontalPosition: 'right'});
      return;
    }
    this.useractorService.insertaractor(this.useractor).subscribe(
      (data) => { console.log(data)}
                                                          );
  }

}
