import { rect } from "./shape";
import { event } from "./util/c2d";

const speed = 5;

export default class player extends rect {
  private _degree: number;
  constructor() {
    super(100, 100, 50, 50, "#7777ff");
    this._degree = 0;
    event.addDirectionKeyDownEvent(
      e => {
        this._degree -= speed;
      },
      e => {
        this.x += Math.sin((Math.PI * this._degree) / 180)*speed;
        this.y += -Math.cos((Math.PI * this._degree) / 180)*speed;
      },
      e => {
        this._degree += speed;
      },
      e => {
        this.x += -Math.sin((Math.PI * this._degree) / 180)*speed;
        this.y += Math.cos((Math.PI * this._degree) / 180)*speed;
      }
    );
  }
  public draw() {
    super.draw(this._degree);
  }
}
