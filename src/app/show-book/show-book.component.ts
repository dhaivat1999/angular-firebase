import { Component, OnInit } from '@angular/core';
import { IBook} from '../interfaces/users';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {
  book:IBook[]; 
  bookList:IBook[];

  constructor(private firebaseService:FirebaseServiceService) { }

  ngOnInit() {
   
    this.firebaseService.getBooksFromFirebase().snapshotChanges().forEach(booksSnapshot => {
      this.bookList=[];
                booksSnapshot.forEach(bookSnapshot =>{
          let book=bookSnapshot.payload.toJSON();
          book['$key']=bookSnapshot.key;
           this.bookList.push(book as IBook)          
      });
    });
 
  }

}
