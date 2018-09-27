import { Router } from '@angular/router';
import { Praxis } from '../../../models/praxis';
import { Class } from './../../../models/class';
import { Professor } from './../../../models/professor';
import { Student } from './../../../models/student';

import { PraxisService } from './../../../services/praxis.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  constructor(private praxisService: PraxisService,private router:Router) { }
  isStudent:boolean;
  isProfessor:boolean;
  user: any;
  student: Student;
  proffesor: Professor;
  proffesors: [Professor];
  students: [Student];
  classes: [Class];
  classeP: Class;
  praxis: Praxis;
  praxiss: [Praxis];
  idUser: any = JSON.parse(localStorage.getItem('user')).id;
  role: string = JSON.parse(localStorage.getItem('user')).role;
  ngOnInit() {
    this.praxisService.getStudents().then((res: [Student]) => this.students = res);
    this.praxisService.getProfessors().then((res: [Professor]) => this.proffesors = res);

    if (this.role == "student") {
      this.isProfessor=false;
      this.isStudent=true;
      this.praxisService.getStudent(this.idUser).then((res: Student) => {
        if (res) {
          this.student = res; 
          this.user = res;
        }
        this.praxisService.getClasses(this.student.studentData.praxisVersion).then((res: [Class]) => {
          if (res) {
            this.classes = res;
          }
          else {

          }

        })
        this.praxisService.getPraxis(this.student.studentData.praxisVersion).then((res: Praxis) => {
          if (res) {
            this.praxis = res;
          }
          else {

          }

        })
      });
    }
    else {
      this.isStudent=false;
      this.isProfessor=true;
      this.praxisService.getProfessor(this.idUser).then((res: Professor) => {
        if (res) {
          this.proffesor = res;
          this.user = res;
           }      

      });

      this.praxisService.getAllPraxis().then((res:[Praxis])=>{
        if(res){
          res.forEach((praxis:Praxis) => {
           praxis.schedule.forEach((item:Class)=>{

           })
          });


        }

      })

    }









  }
  leer(classid:string,studentid:string){
    this.router.navigate([this.router.url+'/session', {classid:classid,studentid:studentid}]);
    this.router.navigate([this.router.url+'/session', {classid:classid,studentid:studentid}]);

  }


}
