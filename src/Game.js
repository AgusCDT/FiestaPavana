import Shop from './scenes/Shop.js';
import Menu from './scenes/Menu.js';
import Tierra from './scenes/Tierra.js';

    let config = {
        type: Phaser.CANVAS,
        canvas: document.getElementById("juego"),
        width: 1200,
        height: 600,
        pixelArt: true,
        scale: {
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,         
            min: {
            width: 256,
            height: 192
            },
            max: {
                width: 800,
                height: 600 
            },
            zoom: 1
        },
        scene: [Menu,Tierra, Shop],           
        physics: { 
            default: 'arcade', 
            arcade: { 
                gravity: { y: 0 }, 
                debug: false 
            } 
        }             
    };

new Phaser.Game(config);
