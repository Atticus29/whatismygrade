import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Service {

  constructor() { }

  loadTable() {
    console.log("got into loadTable");
    d3.csv("https://github.com/umbrae/reddit-top-2.5-million/blob/master/data/cars.csv", function(data){
      console.log(data[0]);
    });
    // let svg, container, zoomed, zoom;
    //
    // svg = d3.select(svgElement);
    // container = d3.select(containerElement);
    //
    // zoomed = () => {
    //   const transform = d3.event.transform;
    //   container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    // }
    //
    // zoom = d3.zoom().on('zoom', zoomed);
    // svg.call(zoom);
  }

}
