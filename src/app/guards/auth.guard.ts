import { AuthService } from './../services/auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  validateR:boolean=false;
  constructor(private authService:AuthService,private router:Router){
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Promise((resolve,reject)=>{
      this.authService.checkToken().subscribe((res:any)=>{
        
        if(res.status && res.id==JSON.parse(localStorage.getItem('user')).id ){
          resolve(true);
        }
        else{
          reject(false);
          this.router.navigate(["signIn"]);           
        }
      })

    })  
  }
}
