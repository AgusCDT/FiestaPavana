export default class Pups extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename) {
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
		if (this.scene.physics.overlap(this.scene.pavana, this.scene.pup)) {
			// Cambio de pantalla
			this.scene.transition.fadeIn(this.filename); // llamada a fadeIn en Transition
			this.scene.pavana.label.setDepth(1);
			this.destroy();
		}
	}
}