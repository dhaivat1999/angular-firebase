import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    submit(loginForm)
    {
      if(loginForm.value.adminId == 'admin' && loginForm.value.adminPassword == 'admin')
      {
        this.auth.setAdminLogin();
        this.router.navigate(['\stats']);
      }
    }
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('adminOn') == 'true')
    {
      alert("Admin is already Logged In");
      this.router.navigate(['\stats']);
    }
  }

}
