import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  checkLogin:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.checkLogin=this.authService.isLoggedIn;
  
  }

}
