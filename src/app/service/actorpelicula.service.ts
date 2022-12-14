import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaActorpelicula } from '../pages/lista-actorpelicula';

@Injectable({
  providedIn: 'root'
})
export class ActorpeliculaService {
  private url:string="http://localhost:8080/apirest/actorpelicula";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaActorpelicula[]>{
    return this.http.get<ListaActorpelicula[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(actorpelicula:ListaActorpelicula):Observable<ListaActorpelicula>{
    return this.http.post<ListaActorpelicula>(this.url, actorpelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaActorpelicula>{
    return this.http.get<ListaActorpelicula>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(actorpelicula:ListaActorpelicula):Observable<ListaActorpelicula>{
    return this.http.put<ListaActorpelicula>(this.url, actorpelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaActorpelicula>{
    return this.http.delete<ListaActorpelicula>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}