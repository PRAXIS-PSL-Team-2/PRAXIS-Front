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
    return this.http.post('https://praxis-api-develop.herokuapp.com/api/v1/students',aplicant ,this.httpOptions);
  }
  test(){
    return this.http.get('https://praxis-api-develop.herokuapp.com/api/v1/students',this.httpOptions);
  }
  checkEmail(email:string){
    return this.http.get('https://praxis-api-develop.herokuapp.com/api/v1/students/email/disponibility/'+email,this.httpOptions);
  }
  checkUsername(username:string){
    return this.http.get('https://praxis-api-develop.herokuapp.com/api/v1/students/username/disponibility/'+username,this.httpOptions);

  }
}
