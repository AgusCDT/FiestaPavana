export default class Enemies extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) {
		super(scene, x, y, filename);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -1;
		this.speedY=0;
		this.posX=x;
		
	}
	
	preUpdate() 
	{		
	    this.body.setVelocity(this.posX+this.speedX,this.speedY);
	}
}