import { Component, OnInit } from '@angular/core';
import { D3Service } from '../d3.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-grade-display',
  templateUrl: './grade-display.component.html',
  styleUrls: ['./grade-display.component.css']
})
export class GradeDisplayComponent implements OnInit {

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    this.d3Service.loadTable();
    d3.select("body")
    .append("h1")
    .text('Hello World!');

    // d3.csv("../assets/master_grades_lecture.csv", function(error, data){
    //   console.log(data[0]);
    // });
  }

}
