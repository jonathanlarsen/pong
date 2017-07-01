///<reference path="vec.ts"/>

class Rect {
  pos: Vec;
  size: Vec;

  constructor(w: number, h: number, x: number = 0, y: number = 0) {
    this.pos = new Vec(x, y);
    this.size = new Vec(w, h);
  }

  get left() {
    return this.pos.x - this.size.x / 2;
  }

  get right() {
    return this.pos.x + this.size.x / 2;
  }

  get top() {
    return this.pos.y - this.size.y / 2;
  }

  get bottom() {
    return this.pos.y + this.size.y / 2;
  }
}
