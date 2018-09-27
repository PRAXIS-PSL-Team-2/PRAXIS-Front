import { Praxis } from './../../../models/praxis';
import { PraxisService } from './../../../services/praxis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praxisinfo',
  templateUrl: './praxisinfo.component.html',
  styleUrls: ['./praxisinfo.component.css']
})
export class PraxisinfoComponent implements OnInit {
  idUser: any = JSON.parse(localStorage.getItem('user')).id;
  praxiss:[Praxis];
  constructor(private praxisService:PraxisService) { }

  ngOnInit() {
    

  }


}
