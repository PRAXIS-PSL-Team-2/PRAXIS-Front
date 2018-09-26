import { EnvvarService } from './envvar.service';
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
  constructor(private http:HttpClient, private envvarService:EnvvarService) { }
  newAplicant(aplicant){
    return this.http.post(this.envvarService.getApi()+'/students',aplicant ,this.httpOptions);
  }
  checkEmail(email:string){
    return this.http.get(this.envvarService.getApi()+'/students/email/disponibility/'+email,this.httpOptions);
  }
  checkUsername(username:string){
    return this.http.get(this.envvarService.getApi()+'/students/username/disponibility/'+username,this.httpOptions);

  }
}
