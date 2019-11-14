import { rect } from "./shape";
import { event } from "./util/c2d";
import { vec2 } from "@takahiro_sato/canvas2d";

import { circle, line } from "./shape";

const speed = 5;

export default class player extends rect {
  private _degree: number;
  private _head: rect;
  constructor() {
    super(100, 100, 50, 50, "#7777ff");
    this._head = new rect(this.x, this.y - 40, 30, 30, "#7777ff");
    this._degree = 0;
    event.addDirectionKeyDownEvent(
      e => {
        this._degree -= speed;
      },
      e => {
        this.addv(new vec2(0, -speed).rotate(this._degree));
      },
      e => {
        this._degree += speed;
      },
      e => {
        this.addv(new vec2(0, speed).rotate(this._degree));
      }
    );
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
