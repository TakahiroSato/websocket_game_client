import { draw } from "./interfaces";
import player from "./player";
import bullet from "./bullet";
import { event, keyCode } from "./util";

export default class gameMain implements draw {
  private _players: { [key: string]: player };
  private _socket: WebSocket;
  constructor() {
    this._socket = new WebSocket("ws://localhost:3012");
    this._socket.addEventListener("open", (e: Event) => {
      console.log("connect");
    });
    this._socket.addEventListener("message", (e: MessageEvent) => {
      const _data = JSON.parse(e.data);
      const _users = _data.users;
      const _bullets = _data.bullets;
      bullet._bullets = [];
      _bullets.map((b: {x: number, y: number}) => {
        bullet._bullets.push(new bullet(b.x, b.y, 5, 0, 0, "#ff0000"))
      });
      for (const key of Object.keys(this._players)) {
        if (!_users.some((d: { id: string }) => d.id === key)) {
          delete this._players[key];
        }
      }
      _users.map(
        (data: {
          id: string | number;
          x: number;
          y: number;
          degree: number;
        }) => {
          if (this._players[data.id]) {
            const p = this._players[data.id];
            p.x = data.x;
            p.y = data.y;
            p.degree = data.degree;
          } else {
            this._players[data.id] = new player(
              data.x,
              data.y,
              50,
              50,
              "#0000ff"
            );
            this._players[data.id].degree = data.degree;
          }
        }
      );
    });
    this._players = {};
    this._setKeyDownListener();
  }
  private _setKeyDownListener() {
    event.keyDownEventListeners.push({
      key: keyCode.left,
      listener: e => {
        this._socket.send(JSON.stringify({ left: 1 }));
      }
    });
    event.keyDownEventListeners.push({
      key: keyCode.up,
      listener: e => {
        this._socket.send(JSON.stringify({ up: 1 }));
      }
    });
    event.keyDownEventListeners.push({
      key: keyCode.right,
      listener: e => {
        this._socket.send(JSON.stringify({ right: 1 }));
      }
    });
    event.keyDownEventListeners.push({
      key: keyCode.down,
      listener: e => {
        this._socket.send(JSON.stringify({ down: 1 }));
      }
    });
    event.keyDownEventListeners.push({
      key: keyCode.space,
      listener: e => {
        this._socket.send(JSON.stringify({ shot: 1 }));
      }
    });
  }
  public draw() {
    for (const key of Object.keys(this._players)) {
      this._players[key].draw();
    }
    bullet.draw();
  }
}
