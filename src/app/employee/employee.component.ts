import { Component, OnInit } from '@angular/core';
import { EmloyeeserService } from './emloyeeser.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees=[];
  public errmsg;

  constructor(private _emloyeeserService:EmloyeeserService) { }

  ngOnInit() {
    this._emloyeeserService.getemployees().subscribe(result =>this.employees=result,
      error =>this.errmsg=error
      );
  }


}
