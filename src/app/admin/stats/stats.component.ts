import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  //   console.log(localStorage.getItem('adminOn'))
  //   if(localStorage.getItem('adminOn') !== 'true')
  //   { 
  //     alert("Sorry You dont have Persmission! Only Admin user is allowed");
  //         this.router.navigate(['\home']);
  //   }

  // }

}
}
