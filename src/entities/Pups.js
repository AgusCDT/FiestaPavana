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
			if(this.scene.pup.filename == 'spacePup'){								
				this.scene.Parallax.changeBackground('space');
				this.destroy();
			}
			else if(this.scene.pup.filename == 'roadPup'){				
				this.scene.Parallax.changeBackground('road');
				this.destroy();
			}
			/*else if(this.scene.pup.filename == 'seaPup'){
				this.scene.Parallax.changeBackground('sea')
			}
			else if(this.scene.pup.filename == 'discoPup'){
				this.scene.Parallax.changeBackground('disco')
			}*/
		}
	}
}