import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions;
  createAuthenticationHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
  }
  constructor(private http:HttpClient) { }
  newAplicant(aplicant){
    return this.http.post(process.env.urlapi+'/students',aplicant ,this.httpOptions);
  }
  checkEmail(email:string){
    return this.http.get(process.env.urlapi+'/students/email/disponibility/'+email,this.httpOptions);
  }
  checkUsername(username:string){
    return this.http.get(process.env.urlapi+'/students/username/disponibility/'+username,this.httpOptions);

  }
}
