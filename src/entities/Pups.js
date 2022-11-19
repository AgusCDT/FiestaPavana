export default class Pups extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename, moving) 
	{
		super(scene, x, y, filename);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -75;
		this.speedY = 0;
		this.filename = filename;
		this.moving=moving;
		this.setDepth(1);			
	}
	
	preUpdate() 
	{	
		var mov=this.moving;
		this.body.setVelocity(this.speedX*mov,this.speedY*mov);
	    
		if (this.scene.physics.overlap(this.scene.pavana, this.scene.pup)) {}
	}

	colision()
	{
		if (this.scene.physics.overlap(this.scene.pavana, this)) {
			// Cambio de pantalla
			if (this.filename != 'goldenFish')
			{
				this.scene.transition.fadeIn(this.filename); // llamada a fadeIn en Transition
			}
			else if(this.scene.pup.filename == 'roadPup')
			{							
				this.scene.parallax.changeBackground('road');
				this.scene.transition.backgroundTransition();
			}
			else if(this.scene.pup.filename == 'goldenFish') 
			{

			}
			else if(this.scene.pup.filename == 'seaPup')
			{
				this.scene.Parallax.changeBackground('sea');
				this.scene.transition.backgroundTransition();
			}
			else if(this.scene.pup.filename == 'discoPup')
			{
				this.scene.Parallax.changeBackground('disco');
				this.scene.transition.backgroundTransition();
			}
			else 
			{
				this.scene.cloud.pickUpCoins();
			}			
			this.scene.pavana.label.setDepth(1);
			this.destroy();
		}
	}
	preUpdate() 
	{		
	    this.body.setVelocity(this.speedX,this.speedY);
		this.colision();
	}
}