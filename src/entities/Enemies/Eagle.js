import Enemies from "./Enemies.js";

export default class Eagle extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(90, 45).setOffset(10, 5);
        // Animación
        this.scene.anims.create({
			key: 'eagleAnimation',
			frames: scene.anims.generateFrameNumbers('eagle', { start: 0, end: 2}),
			frameRate: 2,
			repeat: -1
		});
		this.play('eagleAnimation');
    }

    preUpdate(t, dt){
        //movement...
        this.body.setVelocity(this.speedX, this.speedY);  
        super.preUpdate(t, dt);
    }
}