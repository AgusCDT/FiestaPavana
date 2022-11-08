export default class Enemies extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) {
		super(scene, x, y, filename);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
    	this.body.setCollideWorldBounds();
		this.speedX = -1;
		
	}
	
	preUpdate() 
	{		
	    this.body.setVelocity(this.speedX, this.speedY); // Aplicamos los valores de velocidad
	}
}