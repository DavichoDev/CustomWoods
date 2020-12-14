import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_url = `https://adminpro-backend-angular.herokuapp.com/api/uploads`;

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor( private http: HttpClient ) { }

  getPortafolio() {

    return this.http.get( `${api_url}/portafolio` );

  }

}
