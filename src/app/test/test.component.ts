import { Component } from '@angular/core';
import {OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Button } from 'protractor';

declare var jQuery : any;
declare var $ : any;  

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('button').click(function(event){
      $('#myTab li:nth-child(3) a').tab('show');
     
      });
      
       
  }
  }


