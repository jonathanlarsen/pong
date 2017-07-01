///<reference path="rect.ts"/>

class Ball extends Rect {
  vel: Vec;

  constructor() {
    super(10, 10);
    this.vel = new Vec();
  }
}
