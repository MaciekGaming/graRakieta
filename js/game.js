import Phaser from "phaser";
import Scene from "./scene.js";
import ScenaKoneicGry from "./endgame-scene.js";

let config = {
  width: 256,
  height: 272,
  backgroundColor: 0x000000,
  scene: [Scene, ScenaKoneicGry],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

let game = new Phaser.Game(config);
