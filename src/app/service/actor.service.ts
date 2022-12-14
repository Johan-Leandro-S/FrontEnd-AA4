import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaActor } from '../pages/lista-actor';

import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private url:string="http://localhost:8080/apirest/actor";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaActor[]>{
    return this.http.get<ListaActor[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(actor:ListaActor):Observable<ListaActor>{
    return this.http.post<ListaActor>(this.url, actor, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaActor>{
    return this.http.get<ListaActor>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(actor:ListaActor):Observable<ListaActor>{
    return this.http.put<ListaActor>(this.url, actor, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaActor>{
    return this.http.delete<ListaActor>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}