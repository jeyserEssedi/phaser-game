import { Component } from '@angular/core';
import 'phaser';
import {Game} from "../phaser/game";
import {GameOverScene} from "../phaser/scenes/game-over";
import {PreloadScene} from "../phaser/scenes/preload";
import {MainScene} from "../phaser/scenes/main";
import {BootScene} from "../phaser/scenes/boot";
import {GameTitleScene} from "../phaser/scenes/game-title";

var that;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

    public gameConfig: GameConfig = {
        type: Phaser.AUTO,
        width: (window.innerWidth * window.devicePixelRatio),
        height: (window.innerHeight * window.devicePixelRatio),
        zoom: 1,
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
    };

  constructor() {

    that = this;
  }

    public onGameReady(game: Phaser.Game): void {
        game.scene.add('Boot', BootScene, false);
        game.scene.add('Preload', PreloadScene, false);
        game.scene.add('GameTitle', GameTitleScene, false);
        game.scene.add('Main', MainScene, false);
        game.scene.add('GameOver', GameOverScene, false);
        game.scene.start('Boot');
    }


}






