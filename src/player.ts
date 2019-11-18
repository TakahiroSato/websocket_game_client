import { rect } from "./shape";
import { vec2 } from "@takahiro_sato/canvas2d";

import { circle, line } from "./shape";

const speed = 5;

export default class player extends rect {
  private _degree: number;
  private _head: rect;
  set degree(degree: number) {
    this._degree = degree;
  }
  constructor(x: number, y: number, w: number, h: number, color: string) {
    super(x, y, w, h, color);
    this._head = new rect(this.x, this.y - 40, 30, 30, color);
    this._degree = 0;
  }
  private _set_head() {
    const v = new vec2(0, -(this.height + this._head.height) / 2).rotate(
      this._degree
    );
    this._head.x = this.x + v.x;
    this._head.y = this.y + v.y;
  }
  public draw() {
    this._set_head();
    super.draw(this._degree);
    this._head.draw(this._degree);

    new circle(this.x, this.y, 5, "#ff0000").draw();
    new circle(this._head.x, this._head.y, 5, "#ff0000").draw();
    new line(
      [new vec2(this.x, this.y), new vec2(this._head.x, this._head.y)],
      2,
      "#ff0000"
    ).draw();
  }
}
