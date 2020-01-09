import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ParchiComponent } from './parchi/parchi.component';
import { child } from './parchi/child.component';



@NgModule({
  declarations: [ AppComponent, TestComponent, EmployeeComponent, ParchiComponent ,child ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

DialogModule,
InputSwitchModule 

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
