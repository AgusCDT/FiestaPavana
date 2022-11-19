export default class Pavana extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y) {
		super(scene, x, y,'pavana');
		this.setDepth(1);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
    	this.body.setCollideWorldBounds();
		this.score = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.maxSpeed = 400;
		this.acceleration = 10;
		this.deceleration = 10;
		this.life = 3;
		this.tempColision = 150;
		this.label = this.scene.add.text(10, 10, "Life: " + this.life, { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
		this.cursors = this.scene.input.keyboard.createCursorKeys();
	}

	calculateVelocity(){
		if (this.cursors.up.isDown) { // Input hacia arriba acelerando
	    	if (this.speedY > -this.maxSpeed) {
				this.speedY -= this.acceleration;
	    	}
	    }
	    else if (this.cursors.down.isDown) { // Input hacia abajo acelerando
	    	if (this.speedY < this.maxSpeed) {
				this.speedY += this.acceleration;
	    	}
	    }
	    else { // Deceleracion cuando no se detecta input en el eje Y
		   	if (this.speedY > 0){
	    		this.speedY -= this.deceleration;
	    		if (this.speedY < 0){
	    			this.speedY = 0;
	    		}
	    	}
	    	if (this.speedY < 0){
	    		this.speedY += this.deceleration;
	    		if (this.speedY > 0){
	    			this.speedY = 0;
	    		}
	    	}
	    }
	    if (this.cursors.left.isDown) { // Input hacia la izquierda acelerando
	    	if (this.speedX > -this.maxSpeed) {
				this.speedX -= this.acceleration;
	    	}
	    }
	    else if (this.cursors.right.isDown) { // Input hacia la derecha acelerando
	    	if (this.speedX < this.maxSpeed) {
				this.speedX += this.acceleration;
	    	}
	    }
	    else { // Deceleracion cuando no se detecta input en el eje X
	    	if (this.speedX > 0){
    			this.speedX -= this.deceleration;
	    		if (this.speedX < 0) {
	    			this.speedX = 0;
	    		}
	    	}
	    	else if (this.speedX < 0){
    			this.speedX += this.deceleration;
	    		if (this.speedX > 0) {
	    			this.speedX = 0;
	    		}
	    	}
	    }
	}
	
	preUpdate() {
		this.score++;
		if (this.tempColision > 0){
			this.tempColision -= 1;
		}
		this.calculateVelocity();
	    this.body.setVelocity(this.speedX, this.speedY); // Aplicamos los valores de velocidad
	}
}