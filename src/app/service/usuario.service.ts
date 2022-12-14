import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaUsuario} from '../pages/lista-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string="http://localhost:8080/apirest/Usuario";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaUsuario[]>{
    return this.http.get<ListaUsuario[]>(this.url, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(usuario:ListaUsuario):Observable<ListaUsuario>{
    return this.http.post<ListaUsuario>(this.url, usuario, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaUsuario>{
    return this.http.get<ListaUsuario>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(usuario:ListaUsuario):Observable<ListaUsuario>{
    return this.http.put<ListaUsuario>(this.url, usuario, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaUsuario>{
    return this.http.delete<ListaUsuario>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
