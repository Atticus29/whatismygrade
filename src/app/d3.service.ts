import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  constructor() { }

  loadTable() {
    console.log("got into loadTable");
    var data = [];
    var table = d3.select('#hi')
      .append('table')
      .classed('table', true);
    var thead = table.append('thead').append('tr');
    var tbody = table.append('tbody');

    var reload = function(){
      //TODO fix this
      // d3.csv("http://localhost:4200/assets/master_grades_lecture.csv", function(error, entries){
        // data = entries;
        // redraw(data);
      // });
    }

    var redraw = function(data){
      console.log(data.length);

      var keys = d3.map(data[0]).keys()
      thead.selectAll("th")
        .data(keys)
        .enter()
        .append('th')
        .text(function(d) {return d;});

      var rows = tbody.selectAll("tr")
        .data(data);
      console.log(d3.map(data).values());
      rows.enter().append('tr');
      rows.exit().remove();
      var cells = rows.selectAll('td')
        .data(function(data) {return d3.map(data).values();});
      cells.enter().append('td');
      cells.text(function(d){return d;});
    }

    reload();
  }

}
