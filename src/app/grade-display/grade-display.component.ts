import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-grade-display',
  templateUrl: './grade-display.component.html',
  styleUrls: ['./grade-display.component.css']
})
export class GradeDisplayComponent implements OnInit {

  constructor(private ps: PasswordService) { }

  ngOnInit() {
    this.ps.getEmail().subscribe(result =>{
      console.log(result);
    });

  }

}
