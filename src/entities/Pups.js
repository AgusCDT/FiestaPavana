export default class Pups extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) 
	{
		super(scene, x, y, filename);
		this.scene.pup = this;
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -75;
		this.speedY = 0;
		this.filename = filename;
		this.setDepth(1);			
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
			if (this.filename != 'goldenFish')
			{
				this.scene.transition.fadeIn(this.filename); // llamada a fadeIn en Transition				
			}
			else 
			{
				this.scene.cloud.pickUpCoins();
			}		

			this.scene.pavana.label.setDepth(1);
			this.destroy();
		}
	}
}