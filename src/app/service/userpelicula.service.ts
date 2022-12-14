import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserpeliculaService {

  constructor(private httpClient:HttpClient) { }

  public insertarpelicula (userpelicula:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.post(`${urlbase}/pelicula`, userpelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public obtenerpelicula (userpelicula:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.get(`${urlbase}/pelicula`, userpelicula);
  }


}
