import { Respuesta } from '../../models/respuesta';
import { UploadVideoService } from './../../services/upload-video.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Aplicant } from '../../models/aplicant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { UsersService } from '../../services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PraxisService } from '../../services/praxis.service';


declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  constructor(private usersService: UsersService,private praxisService:PraxisService, private _formBuilder: FormBuilder, private uploadVideoService: UploadVideoService) {

  }
  usernameR:boolean=false;
  emailR:boolean=false;
  respuesta;
  marked = false;
  c1: string = "nav-link bg-primary text-light";
  c2: string = "nav-link bg-light";
  c3: string = "nav-link bg-light";
  upload: boolean;
  disabled = true;
  progress: Number = 0;
  video: File;
  files: File;
  universities = [];
  submitSucces:boolean;
  a1: boolean;
  a2: boolean;
  a3: boolean;
  section1: string = "0%";
  section2: string = "0%";
  res: boolean;
  selectedUniviversity: string=''  ;
  namen: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  university: string = '';
  praxisModality: string = 'firstjob';
  selfDescription: string = '';
  username: string = '';
  password: string = '';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted = false;
  rePassword;
  model: Aplicant;


  addCustomUser = (term) => ({ id: term, name: term });

  ngOnInit() {
    
    this.praxisService.getUniverties().subscribe((res:[string])=>{
      this.universities=res;
    })
    
    this.respuesta=new Respuesta(); 
    this.respuesta.status=false;
    this.a1 = true;
    this.a2 = false;
    this.a3 = false;
    this.upload = false;
    //jquerys
    jQuery('#n1').click(function () {
      $('#pills-tab li:nth-child(3) a').tab('show');
    });
    jQuery('#n2').click(function () {
      $('#pills-tab li:nth-child(5) a').tab('show');
    });
    jQuery('#b2').click(function () {
      $('#pills-tab li:nth-child(1) a').tab('show');
    });
    jQuery('#b3').click(function () {
      $('#pills-tab li:nth-child(3) a').tab('show');
    });
    jQuery('#n3').click(function () {
      $('#pills-tab li:nth-child(4) a').tab('show');
    });
    jQuery('#b4').click(function () {
      $('#pills-tab li:nth-child(3) a').tab('show');
    });

    jQuery('#modalsubmit').click(function () {
      
      $('#exampleModalCenter').modal('show');
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submit2() {

    if (!this.videocheck()) {
      this.upload = true;
      this.uploadVideoService.uploadfile(this.files);
      const progressInterval = setInterval(() => {
        this.progress = this.uploadVideoService.getProgress();
        if (this.progress == 100) {
          clearInterval(progressInterval);
        }
      }, 100);
      this.registerAplicant()

    }


  }
  videocheck() {
    this.video = this.uploadVideoService.getVideo();
    if (this.video) {
      if (this.uploadVideoService.aproved) {
        return false;
      }
      else {
        return true;
      }
    }

    else {
      return true;
    }

  }


   registerAplicant() {
    let prekey = this.uploadVideoService.getKey();
    let key = this.uploadVideoService.getFileUrl(prekey);

    this.model = new Aplicant();
    this.model.video = key;
    this.model.name = this.namen;
    this.model.lastName = this.lastname;
    this.model.email = this.email;
    this.model.username = this.username;
    this.model.password = this.password;
    this.model.phone = this.phone;
    this.model.university = this.selectedUniviversity;
    this.model.goal = this.praxisModality;
    this.model.selfDescription = this.selfDescription;
    
    this.respuesta=new Respuesta(); 
    this.respuesta.status=false;
     this.usersService.newAplicant(this.model).subscribe((error:any) => {
            
       this.respuesta.code=error.code;
       this.respuesta.message=error.message;
       this.respuesta.status=error.status;      
    })
    
  } 
 
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }
  submit() {
    this.progress = 0;
    this.video = this.uploadVideoService.getVideo();
    this.files = new File([this.video], this.username + String(".mp4"), {
      type: 'video/mp4'
    });
    


  }

  length(str: string, min: number, max: number) {
    if (str.length < min || str.length > max) {

      return true
    }
    else {

      return false
    }

  }
  validateEmail() {
    // Create a regular expression
    let regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(this.email)) {
      return false; // Return as valid email
    } else {
      return true // Return as invalid email
    }
  }
  validateUsername(event: any){
    
    this.usersService.checkUsername(this.username).subscribe((res)=>{
      
      if(res){
        this.usernameR=false;
      }else{
        this.usernameR=true;
        
      }
    })
    
  }
  validateEmailR(event: any){
    
    this.usersService.checkEmail(this.email).subscribe((res)=>{
     
      if(res){
        this.emailR=false;
      }else{
        this.emailR=true;
        
      }
    })
    
  }
  validateSpace(str) {
    let regexp = /\s/;;
    if (regexp.test(this.password)) {
      return true;
    }
    else {
      return false;
    }

  }
  numeric(phone){
    if(isNaN(phone)){
      return true;
    }
    else{
      return false;
    }
  }


  s1n() {
    this.section1 = "100%"
    this.c1 = "nav-link bg-primary text-light";
    this.c2 = "nav-link bg-primary text-light";
    this.c3 = "nav-link bg-light";

  }
  s2n() {
    this.c2 = "nav-link bg-primary text-light";
    this.c3 = "nav-link bg-primary text-light";
    this.section2 = "100%"
  }
  s2b() {
    this.section1 = "0%"
    this.section2 = "0%"
    this.c1 = "nav-link bg-primary text-light";
    this.c2 = "nav-link bg-light";
    this.c3 = "nav-link bg-light";
  }
  s3b() {
    this.c3 = "nav-link bg-light";
    this.c2 = "nav-link bg-primary text-light";
    this.c1 = "nav-link bg-primary text-light";
    this.section2 = "0%"
    this.section1 = "100%"
  }
  funcion1() {
    this.c1 = "nav-link bg-primary text-light";
    this.c2 = "nav-link bg-light";
    this.c3 = "nav-link bg-light";
    this.section1 = "0%"
    this.section2 = "0%"
  }

  funcion2() {
    this.c1 = "nav-link bg-primary text-light";
    this.c2 = "nav-link bg-primary text-light";
    this.c3 = "nav-link bg-light";
    this.section1 = "100%"
    this.section2 = "0%"
  }
  funcion3() {
    this.c2 = "nav-link bg-primary text-light";
    this.c1 = "nav-link bg-primary text-light";
    this.c3 = "nav-link bg-primary text-light";
    this.section1 = "100%"
    this.section2 = " 100%"
  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }





}