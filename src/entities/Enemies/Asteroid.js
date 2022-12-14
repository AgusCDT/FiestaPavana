import Enemies from "./Enemies.js";

export default class Asteroid extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(150, 160).setOffset(25, 25);
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

    preUpdate(t, dt) {
        // Velocidad incremental
        this.speed = this.speedX * (this.scene.gameTime/10);
        // Movimiento
        this.body.setVelocity(this.speed, this.speedY);
        super.preUpdate(t, dt);
    }
}