import { Sprite, Texture } from 'pixi.js';

// import pixiLogo from '/pixi.svg';

export class PixiLogo extends Sprite {
  private time = 0;

  constructor() {
    super(Texture.WHITE);

    this.anchor.set(0.5);
    this.scale.set(8);

    Texture.fromURL('https://pixijs.com/images/logo.svg').then(texture => {
      // Texture.fromURL(pixiLogo).then(texture => {
      this.texture = texture;
      this.scale.set(0.5);
    });
  }

  onEnterFrame(delta: number) {
    this.time += delta;
    this.scale.set(1 + 0.025 * Math.sin(this.time * 0.075) ** 4);
  }
}
