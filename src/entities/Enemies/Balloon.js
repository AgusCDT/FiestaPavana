import Enemies from "./Enemies.js";

export default class Balloon extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        
        this.body.setSize(69, 130).setOffset(15, 12);
        
        // Animación
        this.scene.anims.create({
			key: 'balloonAnimation',
			frames: scene.anims.generateFrameNumbers('balloon', { start: 0, end: 3}),
			frameRate: 5,
			repeat: -1
		});
		this.play('balloonAnimation');
    }

    preUpdate(t, dt) {
        // Velocidad incremental
        this.speed = this.speedX * (this.scene.gameTime/10);
        // Movimiento
        this.body.setVelocity(this.speed, this.speedY);
        super.preUpdate(t, dt);
    }
}