import { draw } from "./interfaces";
import player from "./player";
import { event } from "./util/c2d";

export default class gameMain implements draw {
  private _players: { [key: string]: player };
  constructor() {
    const socket = new WebSocket("ws://localhost:3012");
    socket.addEventListener("open", (e: Event) => {
      console.log("connect");
    });
    socket.addEventListener("message", (e: MessageEvent) => {
      const list = JSON.parse(e.data).list;
      for (const key of Object.keys(this._players)) {
        if (!list.some((d: { id: string; }) => d.id === key)) {
          delete this._players[key];
        }
      }
      list.map(
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
    event.addDirectionKeyDownEvent(
      e => {
        socket.send(
          JSON.stringify({
            left: 1,
            up: 0,
            right: 0,
            down: 0
          })
        );
      },
      e => {
        socket.send(
          JSON.stringify({
            left: 0,
            up: 1,
            right: 0,
            down: 0
          })
        );
      },
      e => {
        socket.send(
          JSON.stringify({
            left: 0,
            up: 0,
            right: 1,
            down: 0
          })
        );
      },
      e => {
        socket.send(
          JSON.stringify({
            left: 0,
            up: 0,
            right: 0,
            down: 1
          })
        );
      }
    );
  }
  public draw() {
    for (const key of Object.keys(this._players)) {
      this._players[key].draw();
    }
  }
}
