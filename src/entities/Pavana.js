/*clase de la pavana, con todas sus características*/
export default class Pavana extends Phaser.GameObjects.Sprite{
	constructor(scene, x, y) {
		super(scene, x, y,'pavana');
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
    	this.body.setCollideWorldBounds();
		this.speedX = 0;
		this.speedY = 0;
		this.maxSpeed = 400;
		this.acceleration = 10;
		this.deceleration = 10;
		this.cursors = this.scene.input.keyboard.createCursorKeys();		
	}
	preUpdate() {
		if (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown)
		{
		    if (this.cursors.up.isDown) {
		    	this.body.setVelocityY(-this.speedY);
		    	if (this.speedY < this.maxSpeed) {
					this.speedY += this.acceleration;
		    	}
		    	console.log("Arriba");
		    }
		    else if (this.cursors.down.isDown) {
		    	this.body.setVelocityY(this.speedY);
		    	if (this.speedY < this.maxSpeed) {
					this.speedY += this.acceleration;
		    	}
		    	console.log("Abajo");
		    }
		    if (this.cursors.left.isDown) {
		    	this.body.setVelocityX(-this.speedX);
		    	if (this.speedX < this.maxSpeed) {
					this.speedX += this.acceleration;
		    	}
		    	console.log("Izquierda");
		    }
		    else if (this.cursors.right.isDown) {
		    	this.body.setVelocityX(this.speedX);
		    	if (this.speedX < this.maxSpeed) {
					this.speedX += this.acceleration;
		    	}
		    	console.log("Derecha");
		    }
		}
	    else {
	    	//this.body.setVelocityX(0);
	    	if (this.speedX > 0){
	    		this.speedX -= this.deceleration;
	    		if (this.speedX < 0){
	    			this.speedX = 0;
	    		}
	    	}
	    	if (this.speedY > 0){
	    		this.speedY -= this.deceleration;
	    		if (this.speedY < 0){
	    			this.speedY = 0;
	    		}
	    	}
	    	this.body.setVelocityX(this.speedX);
	    	this.body.setVelocityX(this.speedY);
	    	console.log("Parado2");
	    }
	}
}