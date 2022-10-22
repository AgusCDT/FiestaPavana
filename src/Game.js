/*import Shop from './scenes/Shop.js'
import Menu from './scenes/Menu.js'*/
import Tierra from './scenes/Tierra.js';
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        pixelArt: true,
        scale: {
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        scene: [Tierra],           
        physics: { 
            default: 'arcade', 
            arcade: { 
                gravity: { y: 0 }, 
                debug: false 
            } 
        }             
    };

new Phaser.Game(config);

