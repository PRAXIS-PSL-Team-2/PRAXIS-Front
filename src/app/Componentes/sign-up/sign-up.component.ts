import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Aplicant } from '../../models/aplicant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  universities = [
    {id: 1, name: 'Universidad Nacional'},
    {id: 2, name: 'EAFIT'},
    {id: 3, name: 'Universidad de Antioquia'},
    {id: 4, name: 'Universidad de Medellin' },
    {id: 5, name:  'Universidad Pontificia Bolivariana'}
];  


  selectedUniviversity:any; 
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
  model = new Aplicant();

  addCustomUser = (term) => ({id: term, name: term});

  constructor(private _formBuilder: FormBuilder) {


  }

  


  get diagnostic() {
    /*this.model.name=this.namen;
    this.model.lastName=this.lastname;
    this.model.email=this.email;
    this.model.username=this.username;
    this.model.password=this.password;  
    this.model.phone=this.phone;   
    this.model.university=this.university;   
    this.model.goal=this.praxisModaliy;   
    this.model.selfDescription=this.selfDescription;  */


    return JSON.stringify(this.model);
  }
  ngOnInit() {
    //jquerys
    jQuery('#n1').click(function () {
      $('#pills-tab li:nth-child(2) a').tab('show');
    });
    jQuery('#n2').click(function () {
      $('#pills-tab li:nth-child(3) a').tab('show');
    });
    jQuery('#b2').click(function () {
      $('#pills-tab li:nth-child(1) a').tab('show');
    });
    jQuery('#b3').click(function () {
      $('#pills-tab li:nth-child(2) a').tab('show');
    });
    jQuery('#n3').click(function () {
      $('#pills-tab li:nth-child(4) a').tab('show');
    });
    jQuery('#b4').click(function () {
      $('#pills-tab li:nth-child(3) a').tab('show');
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onSubmit() { this.submitted = true; }
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
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
  validateSpace(str) {
    let regexp = /\s/;;
    if (regexp.test(this.password)) {
      return true;
    }
    else {
      return false;
    }

  }
}