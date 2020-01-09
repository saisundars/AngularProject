import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parchi',
  templateUrl: './parchi.component.html',
  styleUrls: ['./parchi.component.css']
})
export class ParchiComponent implements OnInit {

  username:string="getsure";  
  childData:string;
  parentMethod(data){
    this.childData=data;
  }

  constructor() { }

  ngOnInit() {
  }

}
