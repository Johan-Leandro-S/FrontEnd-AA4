import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class UseractorService {

  constructor(private httpClient:HttpClient) { }

  public insertaractor (useractor:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.post(`${urlbase}/actor`, useractor, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public obteneractor(useractor:any){
    /*return this.httpClient.post(`${urlbase}/usuario/c`, user);*/
    return this.httpClient.get(`${urlbase}/actor`, useractor);
  }

}
