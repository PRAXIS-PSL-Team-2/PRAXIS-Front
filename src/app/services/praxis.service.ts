import { EnvvarService } from './envvar.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PraxisService {
  httpOptions;
  createAuthenticationHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
  }

  constructor(private http:HttpClient, private envvarService:EnvvarService) { }

  getUniverties(){
   
    return this.http.get(this.envvarService.getApi()+'/praxis/universities');
  
  }
}
