import { circle } from "./shape";
import { vec2 } from "@takahiro_sato/canvas2d";
import { draw } from "./interfaces";
import { c2d } from "./util";

export default class bullet extends circle implements draw {
  private _mv: vec2;
  public static _bullets: bullet[] = [];
  constructor(
    x: number,
    y: number,
    r: number,
    mx: number,
    my: number,
    color: string
  ) {
    super(x, y, r, color);
    this._mv = new vec2(mx, my);
    bullet._bullets.push(this);
  }
  public static draw() {
    bullet._bullets.map(b => {
      b.draw();
    });
  }
}
