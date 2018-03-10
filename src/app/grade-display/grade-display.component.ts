import { Component, OnInit } from '@angular/core';
import { D3Service } from '../d3.service';
import { PasswordService } from '../password.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-grade-display',
  templateUrl: './grade-display.component.html',
  styleUrls: ['./grade-display.component.css']
})
export class GradeDisplayComponent implements OnInit {

  constructor(private d3Service: D3Service, private ps: PasswordService) { }

  ngOnInit() {
    this.d3Service.loadTable();
    this.ps.getEmail().subscribe(result =>{
      console.log(result);
    });

  }

}
