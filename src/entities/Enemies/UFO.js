import Enemies from "./Enemies.js";

export default class UFO extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.posX=x;
        this.posY=y;
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
			frames: scene.anims.generateFrameNumbers('ufo', { start: 0, end: 1}),
			frameRate: 1,
			repeat: -1
		});
		this.play('ufoAnimation');
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        //movement...
        this.posX=this.x;  
        if(this.posX==1000)
        {
            this.body.reset(this.posX-1,Phaser.Math.Between(100,500));
        }
        else if(this.posX==800)
        {
            this.body.reset(this.posX-1,Phaser.Math.Between(100,500));
        }
        else if(this.posX==600)
        {
            this.body.reset(this.posX-1,Phaser.Math.Between(100,500));
        }
        else if(this.posX==400)
        {
            this.body.reset(this.posX-1,Phaser.Math.Between(100,500));
        }
        else if(this.posX==200)
        {
            this.body.reset(this.posX-1,Phaser.Math.Between(100,500));
        } 

        this.body.setVelocity(this.speedX, this.speedY);
        
        if (this.x < -80) { 
			this.destroy();
        }  
    }
}