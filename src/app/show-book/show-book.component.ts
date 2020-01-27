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
  bookArray:String[];
  bookTitles:string;
  bookSubTitles:String;
  bookAuthor1s:string;
  bookAuthor2s:String;
  bookAuthor3s:string;
  bookPublications:String;
  bookPrices:String;
  bookGenres:string;
  tester:String ;
  constructor(private firebaseService:FirebaseServiceService) { }

  ngOnInit() {
   
    this.firebaseService.getBooksFromFirebase().snapshotChanges().forEach(booksSnapshot => {
      this.bookList=[];
                booksSnapshot.forEach(bookSnapshot =>{
          let book=bookSnapshot.payload.toJSON();
          book['$key']=bookSnapshot.key;
           this.bookList.push(book as IBook)
           this.bookTitles  = this.bookList[0].bookTitle;
           this.bookSubTitles=this.bookList[0].bookSubTitle;
           this.bookAuthor1s=this.bookList[0].bookAuthor1;
           this.bookAuthor2s=this.bookList[0].bookAuthor2;
           this.bookAuthor3s=this.bookList[0].bookAuthor3;
           this.bookPublications=this.bookList[0].bookPublisher;
           this.bookPrices=this.bookList[0].bookPrice;
           this.bookGenres=this.bookList[0].bookRadioGenre;
                    
      });
    });
 
  }

}
