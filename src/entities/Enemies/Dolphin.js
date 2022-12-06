import Enemies from "./Enemies.js";

export default class Dolphin extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -100 - this.scene.gameTime;
        this.speedY = -20;
        this.body.setSize(90, 85).setOffset(10, 5);
        //Tween
        var tween = this.scene.tweens.add({
            targets:  this,
            duration: 3500,
            ease: 'Linear',         
            repeat: -1,
            yoyo: true,
            angle: {
                getStart: () => 0, 
                getEnd: () => -90 
            },
        });
        // Animación
        this.scene.anims.create({
			key: 'dolphinAnimation',
			frames: scene.anims.generateFrameNumbers('dolphin', { start: 0, end: 2}),
			frameRate: 2,
			repeat: -1
		});
		this.play('dolphinAnimation');
    }

    dolphinMovement() {
        if(this.y >= 550)
        {
            this.speedY *= -1;
        }
        else if(this.y <= 500){
            this.speedY *= -1;
        }
    }
    
    preUpdate(t, dt) {        
        // Movimiento
        this.dolphinMovement();
        this.body.setVelocity(this.speedX, this.speedY); 
        super.preUpdate(t, dt);
    }
}