import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  constructor() { }

  loadTable() {
    var table = d3.select('body').append('table')
    var thead = table.append('thead')
    var	tbody = table.append('tbody');
    var reload = function(){
    d3.csv("http://localhost:4200/assets/master_grades_lecture.csv", function(entries){
      var table = d3.select('body').append('table')
      var thead = table.append('thead')
      var	tbody = table.append('tbody');
      function tabulate(data, columns) {
        // append the header row
        thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
        .data(function (row) {
          return columns.map(function (column) {
            return {column: column, value: row[column]};
          });
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value; });
        return table;
      }
      d3.csv('http://localhost:4200/assets/master_grades_lecture.csv', function(data){
        var colnames = Object.keys(d3.values(data)[0]);
        tabulate(data, colnames);
      });
    });
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
