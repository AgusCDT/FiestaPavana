import Enemies from "./Enemies.js";

export default class Eagle extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(77, 79).setOffset(5, 0);
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
        //movement...
        this.speedX -= 1;
		this.speedY += 0.5;
        this.body.setVelocity(this.speedX, this.speedY);  
        super.preUpdate(t, dt);
    }
}