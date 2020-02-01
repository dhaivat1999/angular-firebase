import { Component, OnInit } from '@angular/core';
import { IBook, IUser} from '../interfaces/users';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-show-book2',
  templateUrl: './show-book2.component.html',
  styleUrls: ['./show-book2.component.scss']
})
export class ShowBook2Component implements OnInit {
  book:IBook[]; 
  bookList:IBook[];
  user:IUser[];
  userList:IUser[];
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
