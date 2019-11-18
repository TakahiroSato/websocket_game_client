import {c2d} from "./util/c2d";
import gameMain from "./gameMain";

const game = new gameMain();

const animation = () => {
  c2d.clear();
  game.draw();
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);