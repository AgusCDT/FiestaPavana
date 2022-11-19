export default class Pups extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) 
	{
		super(scene, x, y, filename);
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
		if (this.scene.physics.overlap(this.scene.pavana, this.scene.pup)) {this.colision();}
	}

	colision()
	{
		if (this.filename != 'goldenFish')
		{
			if(this.filename=='discoPup')
			{
				for (var i =0; i<10;i++)
				{
					for (var j=0; j<4;j++)
					{
						this.pup=new Pups(this,150+i*100,150+j*10,'goldenFish');
					}
				}
			}
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