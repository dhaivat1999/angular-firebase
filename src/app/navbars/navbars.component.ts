import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {
opened=false;
  constructor() { }

  ngOnInit() {
  }

}
