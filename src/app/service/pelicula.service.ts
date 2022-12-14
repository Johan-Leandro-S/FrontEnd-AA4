import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPelicula } from '../pages/lista-pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private url:string="http://localhost:8080/apirest/pelicula";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaPelicula[]>{
    return this.http.get<ListaPelicula[]>(this.url,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  create(pelicula:ListaPelicula):Observable<ListaPelicula>{
    return this.http.post<ListaPelicula>(this.url, pelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  get(id:number):Observable<ListaPelicula>{
    return this.http.get<ListaPelicula>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  update(pelicula:ListaPelicula):Observable<ListaPelicula>{
    return this.http.put<ListaPelicula>(this.url, pelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  delete(id:number):Observable<ListaPelicula>{
    return this.http.delete<ListaPelicula>(this.url+'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}