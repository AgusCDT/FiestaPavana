export default class Pups extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, filename) 
	{
		super(scene, x, y, filename);
		this.scene.pup = this;
		this.scene.add.existing(this);
		this.relatedScene = scene;
		
    	this.scene.physics.add.existing(this);
		this.speedX = 0;
		this.speedY = 75;
		this.filename = filename;
		this.setDepth(1);	
		this.body.setSize(52, 52).setOffset(7, 10);	
		//Tween
        var tween = this.scene.tweens.add({
            targets:  this,
            duration: 3000,
            ease: 'Linear',         
            repeat: -1,
			yoyo: true,
            scaleX: {
                getStart: () => 0.7, 
                getEnd: () => 1 
            },
			scaleY: {
                getStart: () => 0.7, 
                getEnd: () => 1 
            },
        });	
	}
	
	colision() {
		if(this.scene.physics.overlap(this.scene.pavana, this))
		{
			this.scene.transition.fadeIn(this.filename); // llamada a fadeIn en Transition
			this.destroy();	
		}
	}

	onDestroy() {
		if (this.y > 680) { // Los pups se destruyen al sobrepasar el limite para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
		}
	}

	preUpdate() {	
		this.body.setVelocity(this.speedX,this.speedY);    
		this.colision();
		this.onDestroy();
	}
}