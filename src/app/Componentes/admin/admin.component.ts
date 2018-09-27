import { Component, OnInit } from '@angular/core';
import { Praxis } from '../../models/praxis';
import { UsersService } from '../../services/users.service';
import { PraxisService } from '../../services/praxis.service';
import { UploadVideoService } from '../../services/upload-video.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allPraxis: Praxis[] = [];
  professors = [];

  currentPraxis;
  openInscription;
  closeInscription;
  initPraxis;
  endPRaxis;

  students = [];
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
        this.endPRaxis = this.formatDate(this.currentPraxis.endDate)

        console.log(res);
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
