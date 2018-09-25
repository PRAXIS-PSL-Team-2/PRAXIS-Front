import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PraxisService {
  httpOptions;
  urlapi:string='https://praxis-api-develop-v2.herokuapp.com'
  createAuthenticationHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
  }

  constructor(private http:HttpClient) { }

  getUniverties(){
    return this.http.get(this.urlapi+'/api/v1/praxis/universities');
  
  }
}
