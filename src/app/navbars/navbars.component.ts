import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {
  checkLogin:boolean;
opened=false;
  constructor(private authService:AuthService) { }
  
  ngOnInit() {
    this.checkLogin=this.authService.isLoggedIn;
    console.log(this.authService.isLoggedIn);
  }

}
