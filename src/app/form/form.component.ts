import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  vara=10;
  showSpinner=false;
  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner =false;
    },50000)
  }
  ngOnInit() {
  }

}
