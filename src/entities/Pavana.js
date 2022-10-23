/*clase de la pavana, con todas sus características*/
export default class Pavana extends Phaser.GameObjects.Sprite{
	constructor(scene, x, y) {
		super(scene, x, y,'pavana');
		this.speed = 300;
		this.cursors = this.scene.input.keyboard.createCursorKeys();		
	}
	preUpdate() {
	    if (this.cursors.up.isDown) {
	    	this.body.setVelocityY(this.speed);
	    }
	    else if (this.cursors.down.isDown) {
	    	this.body.setVelocityY(-this.speed);
	    }
	    if (this.cursors.left.isDown) {
	    	this.body.setVelocityX(-this.speed);
	    }
	    else if (this.cursors.right.isDown) {
	    	this.body.setVelocityX(this.speed);
	    }
	    else {
	    	this.body.setVelocityX(0);
	    }
	}
}