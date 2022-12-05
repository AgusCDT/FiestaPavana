export default class Goldenfish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, filename,move) 
	{
		super(scene, x, y, filename);
		this.x = x;
		this.y = y;
		this.move = move;
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

	isMoving() {
		if(this.move)
		{
			this.body.setVelocity(0,0);
		}
		else
		{
			this.body.setVelocity(this.speedX,this.speedY);
		}		
	}

	colision() {
		if(this.scene.physics.overlap(this.scene.pavana, this))
		{
			this.scene.coinsHawaii();
            this.scene.cloud.pickUpCoins();
			this.scene.updateLabelFish();
			this.destroy();	
			this.particles.destroy();
		}
	}

	onDestroy() {
		if (this.x < -90) { // Los enemigos se destruyen al sobrepasar la izquierda para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
			this.particles.destroy();
		}
	}

	preUpdate() {	
		this.isMoving();
		this.colision();
		this.onDestroy();
	}
}
