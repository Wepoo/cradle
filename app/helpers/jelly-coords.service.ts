import { Injectable } from '@angular/core';

function getWindow (): any {
    return window;
}

@Injectable()
export class JellyCoordsService {

  startX:     number;
  startY:     number;
  dx:         number;
  dy:         number;
  endX:       number;
  endY:       number;
  x:          number;
  y:          number;
  lastX:      number;
  lastY:      number;
  down:       boolean;
  shakeLimit: number;

  constructor() {
    this.endX = 0;
    this.endY = 0;
    this.x = 0;
    this.y = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.down = false;
    this.shakeLimit = 3;

  }
  mouseUp() {
    if (this.down) {
      this.down = false;
      this.endX += this.x;
      this.endY += this.y;
    }
  }
  mouseDown(e: Event, hoverIndex: number) {
    if (hoverIndex >= 0) {
      this.startX = (<MouseEvent>e).clientX;
      this.startY = (<MouseEvent>e).clientY;
      this.down = true;
    }

  }
  mouseMove(e: Event, jelly: any, container: HTMLElement) {
    if (this.down) {
      this.x = (<MouseEvent>e).clientX - this.startX;
      this.y = (<MouseEvent>e).clientY - this.startY;
      container.style.transform = 'translate(' + (this.endX + this.x) + 'px, ' + (this.endY + this.y) + 'px)';

      this.dx = this.x - this.lastX;
      this.dy = this.y - this.lastY;
      if (this.dx > this.shakeLimit || this.dx < - this.shakeLimit) this.dx = this.dx < 0 ? - this.shakeLimit : this.shakeLimit;
      if (this.dy > this.shakeLimit || this.dy < - this.shakeLimit) this.dy = this.dy < 0 ? - this.shakeLimit : this.shakeLimit;

      // The `shake` function will "move" the half of the points (alternately) the distance defined
      jelly.shake({x: - this.dx, y: - this.dy});

      this.lastX = this.x;
      this.lastY = this.y;
    }
  }
}
