import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { HelpComponent } from './componentes/help/help.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatStepperModule, MatInputModule, MatButtonModule } from '@angular/material';
import { } from '@angular/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TestComponent } from './componentes/test/test.component';
import { RecordRTCComponent } from './componentes/record-rtc/record-rtc.component';
import { NgSelectModule } from '@ng-select/ng-select';
const appRoutes: Routes = [
   
  { path: '', component: HomeComponent   },
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'help', component: HelpComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'test', component: TestComponent},
  { path: 'record', component: RecordRTCComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    HelpComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    RecordRTCComponent
  ],
  imports: [
    NgSelectModule ,
    BrowserModule, FormsModule, ReactiveFormsModule, 
    MatStepperModule, MatInputModule, MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
 
    
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
