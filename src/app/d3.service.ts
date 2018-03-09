import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  private tableData = [];

  constructor() { }

  loadTable() {
    console.log("got into loadTable");
    // var data = [];
    var table = d3.select('#hi')
      .append('table')
      .classed('table', true);

    var thead = table.append('thead').append('tr');

    var tbody = table.append('tbody');

    var reload = function(){
      d3.csv("http://localhost:4200/assets/master_grades_lecture.csv", function(error, rows){
        // data = rows;
        console.log(rows);
        redraw(rows);
      });
    }

    var redraw = function(data){
      var keys = d3.map(data[0]).keys()
      thead.selectAll("th")
        .data(keys)
        .enter()
        .append('th')
        .text(function(d) {return d;});
      console.log("redraw called");
    }

    reload();

  }

}
