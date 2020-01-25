import { Component, OnInit } from '@angular/core';
import { IBook} from '../interfaces/users';
import { FirebaseServiceService } from '../services/firebase-service.service';
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
  constructor(private firebaseService:FirebaseServiceService) { }

  ngOnInit() {
    this.firebaseService.getBooksFromFirebase().snapshotChanges().forEach(booksSnapshot => {
      this.bookList=[];
                booksSnapshot.forEach(bookSnapshot =>{
          let book=bookSnapshot.payload.toJSON();
          book['$key']=bookSnapshot.key;
           this.bookList.push(book as IBook);
           for(let i=0;i<this.bookList.length;i++)
           {
           this.bookTitles=this.bookList[i].bookTitle;
           this.bookSubTitles=this.bookList[i].bookSubTitle;
           this.bookAuthor1s=this.bookList[i].bookAuthor1;          
           this.bookAuthor2s=this.bookList[i].bookAuthor2;        
           this.bookAuthor3s=this.bookList[i].bookAuthor3;        
           this.bookPublications=this.bookList[i].bookPublisher; 
           this.bookPrices=this.bookList[i].bookPrice;     
           this.bookGenres=this.bookList[i].bookRadioGenre;
              console.log(this.bookTitles);
              console.log(this.bookSubTitles);
              console.log(this.bookAuthor1s);
              console.log(this.bookAuthor2s);
               console.log(this.bookAuthor3s);
               console.log(this.bookPublications);
                console.log(this.bookPrices);
               console.log(this.bookGenres);
           }          
      });
    });
 
  }

}
