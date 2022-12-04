

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

		this.particles = this.scene.add.particles('gold').setDepth(0);
		this.particles.createEmitter({
			speed: 50,
			scale: { start: 0.5, end: 0.5 },	
			blendMode: 'ADD',
			follow: this
		});
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
			this.scene.coinsHawaii();
            this.scene.cloud.pickUpCoins();
			this.scene.updateLabelFish();
			this.destroy();	
			this.particles.destroy();
		}
	}
}
