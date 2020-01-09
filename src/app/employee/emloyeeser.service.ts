import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmloyeeserService {
   //private Url:string="assets/employeedata.json";
   private Url:string="https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }
  getemployees():Observable<any>{

    return this.http.get<any>(this.Url)//IEmployee[]
  }
}
