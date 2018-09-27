import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HerokuServiceService {

  private urlPrefix: string;

  constructor(
    private http: Http
  ) {
    this.http.get(window.location.origin + '/backend').subscribe((res:any)=>{
      console.log(res);
      });

    /*this.http.get(window.location.origin + '/backend').subscribe((response: Response) => response.json()).(urlBackend => {
      sessionStorage.setItem('url_backend', urlBackend.url);
    }, () => {
      console.log('Can´t find the backend URL, using a failover value');
      sessionStorage.setItem('url_backend', 'https://failover-url.com');
    });*/
  }

  getUrl(){
    console.log("Servicio");
    return this.http;
  }

}
