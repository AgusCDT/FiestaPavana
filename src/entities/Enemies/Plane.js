import Enemies from "./Enemies.js";

export default class Plane extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
	    this.speedY = 0;
        this.body.setSize(90, 60).setOffset(10, 10);
        // Animación
        this.scene.anims.create({
			key: 'planeAnimation',
			frames: scene.anims.generateFrameNumbers('plane', { start: 0, end: 30}),
			frameRate: 7,
			repeat: -1
		});
		this.play('planeAnimation');
    }

    preUpdate(t, dt){
        //movement...
        this.speedX -= 1;
        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);
    }
}