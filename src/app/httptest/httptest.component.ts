import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // getAppointments() {
  //   return this.http
  //   .get('assets/master_grades_lecture.csv')
  //   .catch(this.handleError);
  // }

}
