/*clase de la pavana, con todas sus características*/
export default class Pavana extends Phaser.GameObjects.Sprite{
	constructor(scene, x, y) {
		super(scene, x, y,'pavana');
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
    	this.body.setCollideWorldBounds();
		this.speed = 0;
		this.acceleration = 10;
		this.deceleration = 20;
		this.maxSpeed = 400;
		this.cursors = this.scene.input.keyboard.createCursorKeys();		
	}
	preUpdate() {
		if (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown)
		{
		    if (this.cursors.up.isDown) {
		    	this.body.setVelocityY(-this.speed);
		    	if (this.speed < this.maxSpeed) {
					this.speed += this.acceleration;
		    	}
		    	console.log("Arriba");
		    }
		    else if (this.cursors.down.isDown) {
		    	this.body.setVelocityY(this.speed);
		    	if (this.speed < this.maxSpeed) {
					this.speed += this.acceleration;
		    	}
		    	console.log("Abajo");
		    }
		    if (this.cursors.left.isDown) {
		    	this.body.setVelocityX(-this.speed);
		    	if (this.speed < this.maxSpeed) {
					this.speed += this.acceleration;
		    	}
		    	console.log("Izquierda");
		    }
		    else if (this.cursors.right.isDown) {
		    	this.body.setVelocityX(this.speed);
		    	if (this.speed < this.maxSpeed) {
					this.speed += this.acceleration;
		    	}
		    	console.log("Derecha");
		    }
		}
	    else {
	    	//this.body.setVelocityX(0);
	    	if (this.speed > 0){
	    		this.speed -= this.deceleration;
	    		if (this.speed < 0){
	    			this.speed = 0;
	    		}
	    	}
	    	this.body.setVelocityX(this.speed);
	    	console.log("Parado");
	    }
	}
}