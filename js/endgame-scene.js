import Phaser from "phaser";

export default class ScenaKoneicGry extends Phaser.Scene {
  constructor() {
    super("Koniecgry");
  }
  create() {
    this.text = this.add.text(10, 50, "Koniec Gry Przegrałeś");
  }
}
