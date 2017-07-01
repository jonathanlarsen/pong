///<reference path="rect.ts"/>

class Player extends Rect {
  score: number;

  constructor(x: number, y: number) {
    super(20, 100, x, y);
    this.score = 0;
  }
}
