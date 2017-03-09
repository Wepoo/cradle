import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {} from 'jelly.js';
declare var Jelly: any;

@Component({
  moduleId: module.id,
  selector: 'games-component',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent extends AfterViewInit {

  constructor() {}

  ngAfterViewInit():void {
    this.reactive();
    this.jellyInit();
  }

  reactive() {
    // Observable.of(1,2,3).map(x => x + '!!!');
    const myNumber$ = Observable.from([1, 2, 3, 4, 5]);
    myNumber$.subscribe(number => console.log(number));

    var button = document.querySelector('h1');
    Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .scan((count: number) => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
  }
  jellyInit() {
    let options:any = {
      paths: '#pentagon-path',
      pointsNumber: 10,
      maxDistance: 100,
      color: '#000066',
      centroid: '.centroid-text',
      intensity: 0.75
      // debug: true
    };
    var jelly = new Jelly('.jelly-canvas', options);
  }
}
