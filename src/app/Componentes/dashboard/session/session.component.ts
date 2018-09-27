import { Class } from './../../../models/class';
import { Professor } from './../../../models/professor';
import { Student } from './../../../models/student';
import { PraxisService } from './../../../services/praxis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { String } from 'aws-sdk/clients/simpledb';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  studentid: string;
  classid: String;
  class: Class;
  string: string;
  resources:[any]=[''];


  constructor(private route: ActivatedRoute, public praxisService: PraxisService) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.studentid = urlParams['studentid'];
      this.classid = urlParams['classid'];

    });
    this.praxisService.getClassesStudent(this.studentid).then((res: [Class]) => {
      res.forEach((item: Class) => {
        new Promise((require, reject) => {
          if (res) {
          
            if (item.classId === this.classid  ) { 
              
              this.class = item;
              this.resources=this.class.resources;
              console.log(this.class)
              this.string = JSON.stringify(item)
              require(true)


            }
            else{}
            
          }
          else{
            reject(false);  
          }


        })


      })
    })
    




  }

}
