import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GradeDisplayComponent } from './grade-display/grade-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { D3Service } from './d3.service';
import { HttptestComponent } from './httptest/httptest.component';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';

const appRoutes: Routes = [
  { path: '',
  component: SignInComponent
  },
  { path: 'test', //students/:user/:pw
  component: GradeDisplayComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


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
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
