import { Component, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tests-component',
  templateUrl: 'tests.component.html',
  styleUrls: ['tests.component.css']
})
export class TestsComponent implements AfterViewInit {
  progressValue: Number;
  constructor() {
    this.progressValue = 5;
  }

  ngAfterViewInit():void {}
}
