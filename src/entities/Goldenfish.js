

export default class Goldenfish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, filename,move) 
	{
		super(scene, x, y, filename);
		this.x = x;
		this.y = y;
		this.move=move;
		this.scene.goldenfish = this;
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -75;
		this.speedY = 0;
		this.filename = filename;
		this.setDepth(1);
		this.body.setSize(50, 35).setOffset(5, 5);		
		//Tween
        /*var tween = this.scene.tweens.add({
            targets:  this,
            duration: 3000,
            ease: 'Linear',         
            repeat: -1,
			yoyo: true,
           
        });*/
	}
    
	preUpdate() 
	{	
		if(this.move)
		{
			this.body.setVelocity(0,0);
		}
		else
		{
			this.body.setVelocity(this.speedX,this.speedY);
		}		    
		//if (this.scene.physics.overlap(this.scene.pavana, this)) {this.colision();}
		this.colision();
	}

	colision()
	{
		if(this.scene.physics.overlap(this.scene.pavana, this))
		{
            this.scene.cloud.pickUpCoins();
			this.scene.updateLabelFish();
			this.destroy();	
		}
	}
}
