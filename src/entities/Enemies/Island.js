import Enemies from "./Enemies.js";

export default class Island extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(90, 45).setOffset(10, 5);
        // Animación
        this.scene.anims.create({
			key: 'islandAnimation',
			frames: scene.anims.generateFrameNumbers('island', { start: 0, end: 42}),
			frameRate: 3,
			repeat: -1
		});
		this.play('islandAnimation');
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        //movement...
        this.body.setVelocity(this.speedX, this.speedY);  
        if (this.x < -80) { 
			this.destroy();
        }  
    }
}