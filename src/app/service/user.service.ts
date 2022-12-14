import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public insertarusuario (user:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.post(`${urlbase}/Usuario`, user, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public obtenerelusuario (user:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.get(`${urlbase}/Usuario`, user);
  }


}
