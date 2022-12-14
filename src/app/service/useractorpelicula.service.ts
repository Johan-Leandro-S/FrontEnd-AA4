import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlbase from './helper';


@Injectable({
  providedIn: 'root'
})
export class UseractorpeliculaService {

  constructor(private httpClient:HttpClient) { }

  public insertaractorpelicula (useractorpelicula:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.post(`${urlbase}/actorpelicula`, useractorpelicula, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public obteneractorpelicula (useractorpelicula:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.get(`${urlbase}/actorpelicula`, useractorpelicula);
  }



}
