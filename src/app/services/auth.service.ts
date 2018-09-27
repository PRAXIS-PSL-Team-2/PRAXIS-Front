
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedValidate:boolean;
  httpOptions;
  urlapi:string=environment.urlapi;
  createAuthenticationHeaders() {
    this.httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' +localStorage.getItem('token')
        
      })
    };
  }
 
  constructor(private http:HttpClient) { }

  login(credentiales){
    console.log(environment.urlapi);
    return this.http.post(String(environment.urlapi)+'/auth/login',credentiales);

    
  }
  checkToken(){
    this.createAuthenticationHeaders();
    return this.http.get(String(environment.urlapi)+'/auth/check/token',this.httpOptions);
  }
  validateRol(){
    
  }
}
