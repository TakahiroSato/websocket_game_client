import {draw} from "./interfaces";
import player from "./player";

export default class gameMain implements draw {
  private _player: player;
  constructor() {
    this._player = new player();
  }
  public draw() {
    this._player.draw();
  }
}