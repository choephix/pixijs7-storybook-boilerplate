import { action } from '@storybook/addon-actions';
import { Container } from 'pixi.js';

import { PixiLogo } from '../../src/PixiLogo';

export default {
  title: 'Demos-PixiLogo',
  args: {
    bunnySize: 5,
    bunnySpacing: 40,
    someInjectedObject: {
      onBunnyClick: action('onBunnyClick'),
    },
  },
};

export const Default = () => {
  const container = new Container();
  const logo = new PixiLogo();
  container.addChild(logo);

  return {
    view: container,
    resize: (screenWidth: number, screenHeight: number) => {
      container.x = screenWidth / 2;
      container.y = screenHeight / 2;

      const scale = Math.min(screenWidth / 1024, screenHeight / 512);
      container.scale.set(scale);
    },
    update: (delta: number) => {
      logo.onEnterFrame(delta);
    },
  };
}
