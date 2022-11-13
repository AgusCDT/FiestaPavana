import Pavana from '../entities/Pavana.js';
import Tierra from '../scenes/Tierra.js';
export default class HUD extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.setDepth(1);
		this.scene.add.existing(this);
        this.goldenFish = 0;
        this.score = 0;
        this.highScore = 0;
        this.scene = scene;
        this.lives = [];
    }

    drawLife() {
        for (var i = 0; i < this.scene.pavana.life; i++) {
            //let image = this.scene.add.image(50 + (i * 70), 50, 'feather');
            //this.lives.push(image);
            //console.log(this.lives);
            //this.lives.pop();
            //console.log(this.lives);
        }
    }
}