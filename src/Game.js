  
export default class Game extends Phaser.Scene{
  /*import { Shop } from './scenes/Shop.js'
  import { Menu } from './scenes/Menu.js'
  import { Tierra } from './scenes/Tierra.js'*/
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload:preload, create:create}
            
        
      };

      var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image("pavana", "./assets/imagenes/gaviota.png");

        
    }

    function create ()
    {
      this.pavana = this.physics.add.image(400, 300, "pavana");
      this.pavana.setScale(0.5); 
      
      this.pavana.setCollideWorldBounds(true);
    }
}
