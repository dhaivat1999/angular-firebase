import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookRadioGenre: string;
  genres: string[] = ['Action', 'Thriller', 'Comedy', 'Kids','Romance','Education','Other'];
  constructor(private FirebaseServiceService:FirebaseServiceService,private router:Router) { }
  submit(bookForm)
  {
    console.log("Form Submitted",bookForm);
    this.FirebaseServiceService.addBookToFirebase(bookForm.value);
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
