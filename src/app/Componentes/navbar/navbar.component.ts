import { AuthService } from './../../services/auth.service';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor( private router:Router, private authService :AuthService) { }

  ngOnInit() {
    
  }

  userOn(){
    if(localStorage.getItem('user')!=null){
      this.user=JSON.parse(localStorage.getItem('user'))
      return true;
    }
    else{
      return false;
    }

  }
 
  logout(){
    localStorage.clear();
    this.router.navigate(['/']); 
  }


}
