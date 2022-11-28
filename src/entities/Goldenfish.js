

export default class Goldenfish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, filename) 
	{
		super(scene, x, y, filename);
		this.scene.goldenfish = this;
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -75;
		this.speedY = 0;
		this.filename = filename;
		this.setDepth(1);		
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
		this.body.setVelocity(this.speedX,this.speedY);    
		//if (this.scene.physics.overlap(this.scene.pavana, this)) {this.colision();}
		this.colision();
	}

	colision()
	{
		if(this.scene.physics.overlap(this.scene.pavana, this))
		{
            this.scene.cloud.pickUpCoins();
			this.scene.pavana.label.setDepth(1);
			this.destroy();	
		}
	}
}