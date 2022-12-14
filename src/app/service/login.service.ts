import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public generartoken(datalogin:any){              
    return this.httpClient.post(`${urlbase}/autenticacion/generartoken`,datalogin);//microservicio de generar token
  }
  //login
  public guardartoken(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public setUser(usuario:any){
    localStorage.setItem('user',JSON.stringify(usuario));
  }


  public getUser(){
    var usuario = localStorage.getItem('user');

    if (usuario != null){
      return JSON.parse(usuario);
    }else{
      this.logout();
      return null;
    }
  }

  public getCurrentUser(){
    return this.httpClient.get(`${urlbase}/autenticacion/usuariologueado`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    })
  }

  

  public logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return null;
  }


  public getUseRol(){
    var usuario = this.getUser();
    return usuario.authorities[0].authority;
  }

  /*public readallroles(){
    return this.httpClient.get(`${urlbase}/rol`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }*/


}