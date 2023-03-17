import './style.css';

import { Application } from 'pixi.js';
import { PixiLogo } from './PixiLogo';

const appDiv = document.querySelector<HTMLDivElement>('#app') || document.body;

const app = new Application<HTMLCanvasElement>({
  width: 640,
  height: 360,
  resizeTo: appDiv,
});
appDiv.appendChild(app.view);

const logo = new PixiLogo();
logo.position.set(app.renderer.width / 2, app.renderer.height / 2);
app.stage.addChild(logo);

// Listen for frame updates
app.ticker.add(logo.onEnterFrame, logo);
