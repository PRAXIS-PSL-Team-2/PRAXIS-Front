import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

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

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}