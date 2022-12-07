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
        // Movimiento
        this.posX=parseInt(this.x);  
        if(this.posX<=1002&&this.posX>=998)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX<=802&&this.posX>=798)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX<=602&&this.posX>=598)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX<=402&&this.posX>=398)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        }
        if(this.posX<=202&&this.posX>=198)
        {
            this.body.reset(this.posX+Phaser.Math.Between(0,200)-100,Phaser.Math.Between(100,500));
        } 

        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);
    }
}