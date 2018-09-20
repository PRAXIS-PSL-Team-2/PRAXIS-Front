import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
        

})
export class TestComponent {
    
     
    cities = [
        {id: 1, name: 'Universidad Nacional'},
        {id: 2, name: 'EAFIT'},
        {id: 3, name: 'Universidad de Antioquia'},
        {id: 4, name: 'Universidad de Medellin' },
        {id: 5, name:  'Universidad Pontificia Bolivariana'}
    ];  

    selectedCity: any;
    selectedCityIds: string[];
    selectedCityName = 'Vilnius';
    selectedCityId: number;

    
    constructor() {
        
    }
    
   
    

}