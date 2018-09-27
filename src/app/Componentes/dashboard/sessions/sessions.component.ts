import { Praxis } from './../../../../../../../classes';
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

  constructor(private praxisService: PraxisService) { }
  user: any;
  student:Student;
  proffesor :Professor;
  proffesors: [Professor];
  students:[Student];
  classes: [Class];
  classeP:Class;
  praxis: Praxis;
  idUser: any = JSON.parse(localStorage.getItem('user')).id;
  role: string = JSON.parse(localStorage.getItem('user')).role;
  ngOnInit() {
    this.praxisService.getStudents().then((res:[Student]) => this.students = res);
    this.praxisService.getProfessors().then((res:[Professor]) => this.proffesors = res);
   
    if (this.role == "student") {
      this.praxisService.getStudent(this.idUser).then((res:Student )=> {
        if (res) {       
          this.student = res;
          this.user=res;         
        }
        this.praxisService.getClasses(this.user.userData.praxisVersion).then((res:[Class])=>{
          if(res){
            this.classes=res;
          }
          else{
    
          }

        })
        this.praxisService.getPraxis(this.user.userData.praxisVersion).then((res:Praxis)=>{
          if(res){
            this.praxis=res;
          }
          else{
    
          }

        })      
      });
    }
    else {
      this.praxisService.getProfessor(this.idUser).then((res:Professor) => {
        if (res) {
          this.proffesor = res;
          this.user=res;
        }

      });
    }
    

   






  }


}
