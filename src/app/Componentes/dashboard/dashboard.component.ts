import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService, private route: Router) { }

  ngOnInit() {
    
    if( JSON.parse(localStorage.getItem('user')).role == 'admin' ) {
      this.route.navigate(['/admin'])
    }
  
  }

}
