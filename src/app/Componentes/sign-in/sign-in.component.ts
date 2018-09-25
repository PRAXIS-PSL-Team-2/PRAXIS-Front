import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string;
  password:string;

  constructor(private authService:AuthService, public router: Router) { }

  ngOnInit() {
  }

  async login(){
    let credentiales ={username:this.username,password:this.password}
    console.log(credentiales);
    await this.authService.login(credentiales).subscribe((res:any)=>{
      if (res  instanceof HttpErrorResponse) {
        
      }
      else{

          if(res.user!=null && res.accessToken!=null){
              localStorage.setItem('user',JSON.stringify(res.user));
              localStorage.setItem('token',res.accessToken);
              this.router.navigate(['dashboard']);
          }
          
         
       
      }
    })

    }

}
