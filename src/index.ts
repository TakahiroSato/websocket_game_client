import {event, c2d} from "./util/c2d";
import gameMain from "./gameMain";

const game = new gameMain();
const socket = new WebSocket("ws://localhost:3012");

socket.addEventListener("open", (e:Event) => {
  console.log("connect");
});

socket.addEventListener("message", (e: MessageEvent) => {
  console.log("Message from server ", e.data);
});

const animation = () => {
  c2d.clear();
  game.draw();
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);