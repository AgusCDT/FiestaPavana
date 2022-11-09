export default class Obstacles extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) {
		super(scene, x, y, filename);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX =-75;
		this.speedY=0;		
	}
	
	preUpdate() 
	{		
	    this.body.setVelocity(this.speedX,this.speedY);
	}
}