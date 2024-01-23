import * as PIXI from 'pixi.js';
import { config } from '../config';
import { getAssetUrls } from '../utils/urls';
import Init from './Init';
import { animate } from '../loops/animate';
export const app = new PIXI.Application<HTMLCanvasElement>({
    width: config.width,
    height: config.height,
    backgroundColor: config.backgroundColor,
    autoStart: config.autoStart,
    antialias: config.antialias,
    resolution: config.resolution,
    backgroundAlpha: 0,
});
export const appStage = new PIXI.Container()
app.stage.addChild(appStage)
app.ticker.add(animate);
PIXI.Assets.load(getAssetUrls()).then(Init)