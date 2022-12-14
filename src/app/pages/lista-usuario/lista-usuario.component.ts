import { Component, OnInit } from '@angular/core';
import { ListaUsuario } from '../lista-usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: ListaUsuario[];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      e =>this.usuarios=e
    );
  }

}
