import Enemies from "./Enemies.js";

export default class Boat extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(60, 80).setOffset(10, 10);
        this.setScale(2,2);
        //Tween
        var tween = this.scene.tweens.add({
            targets:  this,
            duration: 3000,
            ease: 'Linear',         
            repeat: -1,
            yoyo: true,
            angle: {
                getStart: () => 10, 
                getEnd: () => -10 
            },
        });
    //    Animación
        this.scene.anims.create({
			key: 'boatAnimation',
			frames: scene.anims.generateFrameNumbers('boat', { start: 0, end: 6}),
			frameRate: 5,
			repeat: -1
		});
		this.play('boatAnimation');
    }

    preUpdate(t, dt){
        // Movimiento
        this.body.setVelocity(this.speedX, this.speedY);  
        super.preUpdate(t, dt); 
    }
}