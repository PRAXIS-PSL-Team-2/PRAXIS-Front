import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  constructor(private http:HttpClient) { }

  login(credentiales){
    console.log(environment.urlapi);
    return this.http.post(String(environment.urlapi)+'/auth/login',credentiales);

    
  }
}
