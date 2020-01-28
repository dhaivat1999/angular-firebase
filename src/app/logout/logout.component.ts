import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) {
    // localStorage.removeItem('loggedIn');
   }

  ngOnInit() {
  
    sessionStorage.setItem('loggedIn','false');
    this.router.navigate(['/home']);
  }

}
