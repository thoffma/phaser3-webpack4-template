import Phaser from 'phaser'
import BootScene from "./scenes/BootScene"
import MenuScene from "./scenes/MenuScene"

var config = {
    type: Phaser.AUTO,
    width:960,
    height: 540,
    backgroundColor: 0xffddff,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y : 200 
            },
            debug: false
        }
    },
    scene: [
        BootScene,
        MenuScene
    ]
}

window.game = new Phaser.Game(config)
