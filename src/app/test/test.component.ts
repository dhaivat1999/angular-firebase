import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private appService: UserService) { }

  ngOnInit() {
this.appService.getAllposts().subscribe(data =>{
   console.log(data);
},(error) => {
  console.log('error occuered',error);
})
  }

}
