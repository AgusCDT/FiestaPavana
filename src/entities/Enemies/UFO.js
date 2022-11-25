import Enemies from "./Enemies.js";

export default class UFO extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(90, 45).setOffset(10, 5);
        //Tween
        /*var tween = this.scene.tweens.add({
            targets:  this,
            duration: 2000,
            ease: 'Linear',         
            repeat: -1,
            yoyo: true,
            angle: {
                getStart: () => 0, 
                getEnd: () => -90 
            },
        });*/
        // Animación
        this.scene.anims.create({
			key: 'ufoAnimation',
			frames: scene.anims.generateFrameNumbers('ufo', { start: 0, end: 2}),
			frameRate: 2,
			repeat: -1
		});
		this.play('ufoAnimation');
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