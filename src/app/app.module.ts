import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GradeDisplayComponent } from './grade-display/grade-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordService } from './password.service';
import { HttptestComponent } from './httptest/httptest.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GradeDisplayComponent,
    PageNotFoundComponent,
    HttptestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PasswordService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
