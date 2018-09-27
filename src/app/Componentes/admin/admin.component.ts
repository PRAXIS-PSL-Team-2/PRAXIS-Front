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

  praxis = [];

  professors = [];

  currentPraxis: Praxis;

  students = [];
  candidates = [];
  classes = [];

  constructor(private usersService: UsersService, private praxisService:PraxisService, private uploadVideoService: UploadVideoService) { }

  ngOnInit() {

  }


  getFileUrl(key:String){
    return this.uploadVideoService.getFileUrl(key);
  }

}
