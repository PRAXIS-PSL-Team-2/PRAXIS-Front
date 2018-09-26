import { Injectable } from '@angular/core';
import runtimeEnv from '@mars/heroku-js-runtime-env';

@Injectable({
  providedIn: 'root'
})
export class EnvvarService {
  
  env:runtimeEnv = runtimeEnv();
  constructor() {  }
  public getApi(){
    console.log(this.env.REACT_APP_URL); 
    return JSON.stringify(this.env.REACT_APP_URL);
      
  }
}
