import { Component, OnInit } from '@angular/core';
import {HerokuServiceService} from '../../services/heroku-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private heroku: HerokuServiceService) { }

  ngOnInit() {
    this.heroku.getUrl();
  }

}
