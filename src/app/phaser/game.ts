/// <reference path="../../phaser.d.ts"/>

import { BootScene } from './scenes/boot';
import { PreloadScene } from './scenes/preload';
import { GameTitleScene } from './scenes/game-title';
import { MainScene } from './scenes/main';
import { GameOverScene } from './scenes/game-over';
import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';


const config: GameConfig = {
  width: WORLD_WIDTH,
  height: WORLD_HEIGHT,
  type: Phaser.AUTO,
  parent: 'body',
  backgroundColor: '#93e7ff',
  zoom: 1,
  physics: {
    default: 'arcade'
  }
};


export class Game extends Phaser.Game {

  constructor(config:GameConfig) {

    super(config);
    
    this.scene.add('Boot', BootScene, false);
    this.scene.add('Preload', PreloadScene, false);
    this.scene.add('GameTitle', GameTitleScene, false);
    this.scene.add('Main', MainScene, false);
    this.scene.add('GameOver', GameOverScene, false);

    this.scene.start('Boot');


  }

}

