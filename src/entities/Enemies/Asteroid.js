import Enemies from "./Enemies.js";

export default class Asteroid extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(150, 140).setOffset(25, 30);
        //Tween
        var tween = this.scene.tweens.add({
            targets:  this,
            duration: 7000,
            ease: 'Linear',         
            repeat: -1,
            angle: {
                getStart: () => 0, 
                getEnd: () => -360 
            },
        });
        
        // Animación
        this.scene.anims.create({
			key: 'asteroidAnimation',
			frames: scene.anims.generateFrameNumbers('asteroid', { start: 0, end: 0}),
			frameRate: 2,
			repeat: -1
		});
		this.play('asteroidAnimation');
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        //movement...
        this.body.setVelocity(this.speedX, this.speedY); 
    }
}