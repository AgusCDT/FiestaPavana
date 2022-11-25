import Enemies from "./Enemies.js";

export default class Boat extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(90, 45).setOffset(10, 5);
       // Animación
        this.scene.anims.create({
			key: 'boatAnimation',
			frames: scene.anims.generateFrameNumbers('boat', { start: 0, end: 2}),
			frameRate: 2,
			repeat: -1
		});
		this.play('boatAnimation');
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        this.body.setVelocity(this.speedX, this.speedY);  
        if (this.x < -80) { 
			this.destroy();
        }  
    }
}