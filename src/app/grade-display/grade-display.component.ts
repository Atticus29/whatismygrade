import { Component, OnInit, ElementRef } from '@angular/core';
import { PasswordService } from '../password.service';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-grade-display',
  templateUrl: './grade-display.component.html',
  styleUrls: ['./grade-display.component.css']
})
export class GradeDisplayComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service, private ps: PasswordService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    if(this.parentNativeElement !== null){
      d3ParentElement = d3.select(this.parentNativeElement);
      console.log(d3ParentElement);

    }
    // this.ps.getEmail().subscribe(result =>{
    //   console.log(result);
    // });

  }

}
