import Enemies from "./Enemies.js";

export default class Car extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(90, 50).setOffset(12,40);
        // Animación
        this.scene.anims.create({
			key: 'carAnimation',
			frames: scene.anims.generateFrameNumbers('car', { start: 0, end: 3}),
			frameRate: 10  ,
			repeat: -1
		});
		this.play('carAnimation');
    }

    preUpdate(t, dt) {    
        //movement...
        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);  
    }
}