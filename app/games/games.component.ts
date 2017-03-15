import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WindowRefService } from '../helpers/window-ref.service';
import { JellyCoordsService }    from '../helpers/jelly-coords.service';

declare var Jelly: any;
interface MouseEvent extends Event {clientX:number, clientY: number};

@Component({
  moduleId: module.id,
  selector: 'games-component',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent implements AfterViewInit {
   private _window: Window;

  constructor(private windowRef: WindowRefService, private jellyCoords: JellyCoordsService) {
    this._window = windowRef.nativeWindow;
  }

  ngAfterViewInit():void {
    this.reactive();
    this.jellyInit();
  }

  reactive() {
    // Observable.of(1,2,3).map(x => x + '!!!');
    const myNumber$ = Observable.from([1, 2, 3, 4, 5]);
    myNumber$.subscribe(number => console.log(number));

    var button = document.querySelector('button');
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
    let jelly: any = new Jelly('.jelly-canvas', options);

    let container: HTMLElement = <HTMLElement>document.querySelector('.jelly-container');
    let hoverIndex: number = -1;
    Observable.fromEvent(container, 'mousemove')
      .subscribe(x => 
        {
          hoverIndex = jelly.getHoverIndex();
          container.style.cursor = hoverIndex === -1 ? 'default' : 'pointer';
        });

    Observable.fromEvent(container, 'mousedown')
      .subscribe((e: Event) => {
        this.jellyCoords.mouseDown(e, hoverIndex);
      });

    Observable.fromEvent(document, 'mousemove')
      .subscribe((e: Event) => {
        this.jellyCoords.mouseMove(e, jelly, container);
      });

    Observable.fromEvent(document, 'mouseup')
      .subscribe(el => {
        this.jellyCoords.mouseUp();
      });
    Observable.fromEvent(document, 'mouseout')
      .subscribe((e: Event) => {
        if ((e.target as any).nodeName == 'HTML') {
          this.jellyCoords.mouseUp();
        }
      });

  }
}
