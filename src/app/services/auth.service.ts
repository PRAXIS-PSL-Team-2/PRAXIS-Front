import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  urlapi:string='https://praxis-api-develop-v2.herokuapp.com'

  constructor(private http:HttpClient) { }

  login(credentiales){

    return this.http.post(this.urlapi+'/auth/login',credentiales);

    
  }
}
