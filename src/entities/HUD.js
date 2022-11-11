import Pavana from '../entities/Pavana.js';
export default class HUD extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'feather');
        this.setDepth(1);
		this.scene.add.existing(this);
        this.goldenFish = 0;
        this.score = 0;
        this.highScore = 0;
        this.scene=scene;
    }

    drawLife() {
        for (var i = 0; i < this.scene.pavana.life; i++) {
            super.add.image(50 + (i * 20), 50, 'feather').setOrigin(0, 0);
            //this.add.image(50 + (i * 20), 50, 'feather').setOrigin(0, 0);
            console.log(this.scene.pavana.life);
        }
    }
}