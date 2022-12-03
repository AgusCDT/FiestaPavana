import Enemies from "./Enemies.js";

export default class UFO extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.posX=x;
        this.posY=y;
        this.body.setSize(90, 50).setOffset(5, 30);
        // Animación
        this.scene.anims.create({
			key: 'ufoAnimation',
			frames: scene.anims.generateFrameNumbers('ufo', { start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.play('ufoAnimation');
    }

    preUpdate(t, dt){
        //movement...
        this.posX=parseInt(this.x);  
        if(this.posX==1000)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX==800)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX==600)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX==400)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX==200)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        } 

        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);
    }
}