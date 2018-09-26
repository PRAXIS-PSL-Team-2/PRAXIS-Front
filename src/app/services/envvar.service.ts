import { Injectable } from '@angular/core';
import runtimeEnv from '@mars/heroku-js-runtime-env';

@Injectable({
  providedIn: 'root'
})
export class EnvvarService {
  
  env:runtimeEnv = runtimeEnv();
  constructor() {  }
  public getApi():string{
    console.log(this.env.apiurl);
    return JSON.stringify(this.env.apiurl);
      
  }
}
