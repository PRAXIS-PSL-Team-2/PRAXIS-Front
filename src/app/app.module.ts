import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SignInComponent } from './Componentes/sign-in/sign-in.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { HelpComponent } from './Componentes/help/help.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RecordRTCComponent } from './Componentes/record-rtc/record-rtc.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import{UsersService} from './services/users.service';
import{PraxisService} from './services/praxis.service';
import{AuthService} from './services/auth.service';
import { UploadVideoService } from './services/upload-video.service';

const appRoutes: Routes = [
   
  { path: '', component: HomeComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'help', component: HelpComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: ''}  
  
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
    RecordRTCComponent
  ],
  imports: [
    NgSelectModule ,
    BrowserModule, FormsModule, ReactiveFormsModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UploadVideoService,AuthService,UsersService,PraxisService],
 
    
  bootstrap: [AppComponent]
})
export class AppModule { }

