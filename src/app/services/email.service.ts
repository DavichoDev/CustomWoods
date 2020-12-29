import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
const URL_API = `https://adminpro-backend-angular.herokuapp.com/api`;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http: HttpClient ) { }

  enviarMensaje( campos ){
    return this.http.post(`${URL_API}/email/msg`, campos);
  }

}
