import Enemies from "./Enemies.js";

export default class Eagle extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(50, 45).setOffset(15, 25);
        this.setScale(1.5, 1.5);
        // Animación
        this.scene.anims.create({
			key: 'eagleAnimation',
			frames: scene.anims.generateFrameNumbers('eagle', { start: 0, end: 6}),
			frameRate: 5,
			repeat: -1
		});
		this.play('eagleAnimation',);
    }

    preUpdate(t, dt){
        // Movimiento
        this.speedX -= 1;
		this.speedY += 0.5;
        this.body.setVelocity(this.speedX, this.speedY);  
        super.preUpdate(t, dt);
    }
}