import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'my-draw_panel',
  templateUrl: 'draw.component.html',
  styleUrls: ['draw.component.css']
})
export class DrawComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    ['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'].forEach(function(i, arr) {
      document.getElementById('colors_panel').insertAdjacentHTML('beforeend', "<a href='#colors_sketch' data-color='" + i + "' style='width: 30px;height: 30px;display: block;margin: 10px;background: " + i + ";'></a> ");
    });
    [3, 5, 10, 15].forEach(function(i, arr) {
      document.getElementById('tools').insertAdjacentHTML('beforeend', "<a href='#colors_sketch' data-size='" + i + "' style='background: #ccc'>" + i + "</a> ");
    });
    $('#colors_sketch').sketch();
  }
}

