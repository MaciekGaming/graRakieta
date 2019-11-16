import Phaser from "phaser";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.spritesheet("ldk", "assets/ldk.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.image("ship2przeciwnik", "assets/ship2przeciwnik.png");
    this.load.image("ship2przeciwnik1", "assets/ship2przeciwnik1.png");
  }

  create() {
    this.kDownShip2 = 1;
    this.kDownShip3 = 1;
    this.background = this.add.image(256 / 2, 272 / 2, "bg");
    this.ldk = this.physics.add.sprite(256 / 2, 272 / 2, "ldk");
    this.shipprzeciwnicy = this.physics.add.image(56, 56, "ship2przeciwnik");
    this.shipprzeciwnicy2 = this.physics.add.image(160, 20, "ship2przeciwnik1");

    this.keys = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: "ldk_anim",
      frames: this.anims.generateFrameNumbers("ldk"),
      frameRate: 10,
      repeat: -1
    });
    this.ldk.play("ldk_anim");

    this.physics.add.overlap(
      this.ldk,
      this.shipprzeciwnicy,
      this.ScenaKoneicGry,
      null,
      this
    );
  }

  update() {
    let speed = 2;
    if (this.keys.left.isDown) {
      this.ldk.x = this.ldk.x - speed;
      if (this.ldk.x < 0) {
        this.ldk.x = 0;
      }
    }
    if (this.keys.right.isDown) {
      this.ldk.x = this.ldk.x + speed;
      if (this.ldk.x > 256) {
        this.ldk.x = 256;
      }
    }
    if (this.keys.up.isDown) {
      this.ldk.flipY = false;
      this.ldk.y = this.ldk.y - speed;
      if (this.ldk.y < 0) {
        this.ldk.y = 0;
      }
    }
    if (this.keys.down.isDown) {
      this.ldk.flipY = true;
      this.ldk.y = this.ldk.y + speed;
      if (this.ldk.y > 272) {
        this.ldk.y = 272;
      }
    }

    if (this.kDownShip2 === 1) {
      this.shipprzeciwnicy.y = this.shipprzeciwnicy.y + 1.4;
    } else {
      this.shipprzeciwnicy.y = this.shipprzeciwnicy.y - 1.4;
    }

    if (this.shipprzeciwnicy.y > 272) {
      this.kDownShip2 = 0;
      this.shipprzeciwnicy.flipY = false;
    } else if (this.shipprzeciwnicy.y < 0) {
      this.kDownShip2 = 1;
      this.shipprzeciwnicy.flipY = true;
      this.shipprzeciwnicy.x = Math.random() * 128;
    }

    if (this.kDownShip3 === 1) {
      this.shipprzeciwnicy2.y = this.shipprzeciwnicy2.y + 1.6;
    } else {
      this.shipprzeciwnicy2.y = this.shipprzeciwnicy2.y - 1.6;
    }

    if (this.shipprzeciwnicy2.y > 272) {
      this.kDownShip3 = 0;
      this.shipprzeciwnicy2.flipY = false;
    } else if (this.shipprzeciwnicy2.y < 0) {
      this.kDownShip3 = 1;
      this.shipprzeciwnicy2.flipY = true;
      this.shipprzeciwnicy2.x = Math.random() * 128 + 128;
    }
  }

  ScenaKoneicGry() {
    this.scene.start("Koniecgry");
  }
}
