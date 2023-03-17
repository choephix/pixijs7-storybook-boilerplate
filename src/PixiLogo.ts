import { Sprite, Texture } from 'pixi.js';

import pixiLogo from '/pixi.svg';

export class PixiLogo extends Sprite {
  constructor() {
    super(Texture.from(pixiLogo));
    
    this.anchor.set(0.5);
  }

  onEnterFrame() {
    this.scale.set(1 + .125 * Math.sin(.0075 * performance.now()) ** 4);
  }
}
