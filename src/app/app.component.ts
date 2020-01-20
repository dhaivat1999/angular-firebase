import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'firebase-demo';
  courses:any[];
  constructor(db:AngularFireDatabase) 
  { 
    db.list('/courses')
    // .subscribe(courses =>{
    //       this.courses =courses;
    //       console.log(this.,courses);
    // });
}
}

