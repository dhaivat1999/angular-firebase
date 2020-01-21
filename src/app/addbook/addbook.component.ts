import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookGenre: string;
  genres: string[] = ['Action', 'Thriller', 'Comedy', 'Kids','Romance','Education'];
  constructor() { }

  ngOnInit() {
  }

}
