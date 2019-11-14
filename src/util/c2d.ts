import { canvas2d } from "@takahiro_sato/canvas2d";

const canvasId = "canvas2d";
const c2d = new canvas2d(canvasId);

const event = {
  addMouseDownEvent: (callback: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mousedown", callback);
  },
  addMouseMoveEvent: (callback: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mousemove", callback);
  },
  addMouseUpEvent: (callBack: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mouseup", callBack);
  },
  addDirectionKeyDownEvent: (
    left: EventListener,
    up: EventListener,
    right: EventListener,
    down: EventListener
  ) => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case 37: // left
          left(e);
          break;
        case 38: // up
          up(e);
          break;
        case 39: // right
          right(e);
          break;
        case 40: // down
          down(e);
          break;
        default:
          throw new Error("Invalid keyCode");
      }
      e.preventDefault();
    });
  }
};

export { c2d, event };
