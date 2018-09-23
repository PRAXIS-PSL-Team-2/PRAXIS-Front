import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(private injector: Injector) { }    

    handleError(error: any) {
      let router = this.injector.get(Router);
      console.log('URL: ' + router.url);
      
      if (error instanceof HttpErrorResponse) {
          //Backend returns unsuccessful response codes such as 404, 500 etc.				  
          console.log('Backend returned status code: ', error.status);
          console.log('Response body:', error.message);  
          console.log('Response message:', error.error);         	  
      } else {
          //A client-side or network error occurred.	          
          console.log('response', error.status,' ',error.description,error.object);          
      }     
    }
} 