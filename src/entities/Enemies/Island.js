import Enemies from "./Enemies.js";

export default class Island extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(150, 220).setOffset(30, 15);
        // Animación
        this.scene.anims.create({
			key: 'islandAnimation',
			frames: scene.anims.generateFrameNumbers('island', { start: 0, end: 42}),
			frameRate: 3,
			repeat: -1
		});
		this.play('islandAnimation');
    }

    preUpdate(t, dt) {
        // Velocidad incremental
        this.speed = this.speedX * (this.scene.gameTime/10);
        /// Movimiento
        this.body.setVelocity(this.speed, this.speedY);  
        super.preUpdate(t, dt);
    }
}