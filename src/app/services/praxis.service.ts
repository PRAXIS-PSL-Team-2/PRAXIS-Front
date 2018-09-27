import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PraxisService {
  public class:any;
  public student:any;
  public students:[any];
  public praxis:any;
  public universities:[any];
  httpOptions;
  urlapi:string=environment.urlapi;
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
  getStudent(_idStudent:string):Promise<any>{
   return new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/students/'+_idStudent).subscribe((res:any)=>{
        if(res.status){
          
          res.object;
         
          resolve(res.object);
        }
        else{
          reject(false)

         
        }
      });

   })}
   getStudents():Promise<[any]>{
    return new Promise((resolve,reject)=>{
       this.http.get(this.urlapi+'/api/v1/students').subscribe((res:any)=>{
         if(res.status){          
           resolve(res.object);
         }
         else{
           reject(false)          
         }
       });
 
    })}

    getProfessor(_idProfessor:string):Promise<any>{
      return new Promise((resolve,reject)=>{
        this.http.get(this.urlapi+'/api/v1/professors/'+_idProfessor).subscribe((res:any)=>{
           if(res.status){
             
             res.object;
            
             resolve(res.object);
           }
           else{
             reject(false)
                            
            
           }
         });
   
      })}
  

    getProfessors():Promise<[any]>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/professors').subscribe((res:any)=>{
         if(res.status){          
           resolve(res.object);
         }
         else{
           reject(false)          
         }
       });
 
    })}  
  
  getClasses(_idPraxis:string):Promise<[any]>{
    return  new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/praxis/'+_idPraxis+'/classes').subscribe((res:any)=>{
        if(res.status){
          resolve(res.object);
        }
        else{
          reject(false);
        }
      })
    }); 

  
  }


  getClassesStudent(_idEstudent:string):Promise<[any]>{
    return  new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/students/'+_idEstudent+'/classes').subscribe((res:any)=>{
        if(res.status){
          resolve(res.object);
        }
        else{
          reject(false);
        }
      })
    }); 
    

  
  }
  getPraxis(_idPraxis:string):Promise<any>{
    return  new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/praxis/'+_idPraxis).subscribe((res:any)=>{
        if(res.status){
          resolve(res.object);
        }
        else{
          reject(false);
        }
      })

    });
    
  }
  getAllPraxis():Promise<[any]>{
    return  new Promise((resolve,reject)=>{
      this.http.get(this.urlapi+'/api/v1/praxis').subscribe((res:any)=>{
        if(res.status){
          resolve(res.object);
        }
        else{
          reject(false);
        }
      })

    });
    
  }
}
