import { Component, OnInit } from '@angular/core';
import { Praxis } from '../../models/praxis';
import { UsersService } from '../../services/users.service';
import { PraxisService } from '../../services/praxis.service';
import { UploadVideoService } from '../../services/upload-video.service';
import { Student } from '../../models/student';
import { Professor } from '../../models/professor';
import { Class } from '../../models/class';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allPraxis: Praxis[] = [];
  professors = [];

  currentPraxis;
  curretnPraxisId;
  openInscription;
  closeInscription;
  initPraxis;
  endPRaxis;

  selectedVideoKey = '';

  students: Student[] = [];
  candidates = [];
  classes = [];

  constructor(private usersService: UsersService, private praxisService:PraxisService, private uploadVideoService: UploadVideoService) { }

  ngOnInit() {
    this.praxisService.getAllPraxis().then((res: Praxis[]) => {
      if (res) {
        this.allPraxis = res;
        this.currentPraxis = this.allPraxis[0];


        this.openInscription = this.formatDate(this.currentPraxis.closeInscriptionDate);
        this.closeInscription = this.formatDate(this.currentPraxis.openInscriptionDate);
        this.initPraxis = this.formatDate(this.currentPraxis.initialDate);
        this.endPRaxis = this.formatDate(this.currentPraxis.endDate);

        this.curretnPraxisId = this.currentPraxis._id;

        this.praxisService.getPraxisStudents(this.curretnPraxisId).then((res: Student[]) => {
          if (res) {
            this.students = res["students"];
            
            this.praxisService.getPraxisCandidates(this.curretnPraxisId).then((res: Student[]) => {
              if (res) {
                this.candidates = res["candidates"];
                
                this.praxisService.getProfessors().then((res: Professor[]) => {
                  if (res) {
                    this.professors = res;

                    this.praxisService.getClasses(this.curretnPraxisId).then((res: Class[]) => {
                      if (res) {
                        this.classes = res; 
                      }
                    })
                    
                  }
                })
                
              }
            })

          }

        })
      }
      
    })
  }

  setVideo(key) {
    this.selectedVideoKey = key
  }

  loadPraxis() {
    let selectedPraxis = jQuery('#select-praxis option:selected').attr("value");

    this.students = [];
    this.candidates = [];
    this.classes = [];
    
    console.log(selectedPraxis);

    this.praxisService.getPraxis(selectedPraxis).then((res: Praxis[]) => {
      if (res) {

        this.currentPraxis = res;


        this.openInscription = this.formatDate(this.currentPraxis.closeInscriptionDate);
        this.closeInscription = this.formatDate(this.currentPraxis.openInscriptionDate);
        this.initPraxis = this.formatDate(this.currentPraxis.initialDate);
        this.endPRaxis = this.formatDate(this.currentPraxis.endDate);

        this.curretnPraxisId = this.currentPraxis._id;

        this.praxisService.getPraxisStudents(selectedPraxis).then((res: Student[]) => {
          if (res) {
            this.students = res["students"];
            
            this.praxisService.getPraxisCandidates(selectedPraxis).then((res: Student[]) => {
              if (res) {
                this.candidates = res["candidates"];
                
                this.praxisService.getProfessors().then((res: Professor[]) => {
                  if (res) {
                    this.professors = res;

                    this.praxisService.getClasses(selectedPraxis).then((res: Class[]) => {
                      if (res) {
                        this.classes = res; 
                      }
                    })
                    
                  }
                })
                
              }
            })

          }

        })
      }
      
    })
    
  }


  getFileUrl(key:String){
    return this.uploadVideoService.getFileUrl(key);
  }

  formatDate(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
