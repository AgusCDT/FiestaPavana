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
		this.life = this.scene.cloud.getLife();
		this.multiplicator = this.scene.cloud.getMultiplicator();
		this.lifeImages = [];
		this.tempColision = 2000; // ms
		this.w = this.scene.input.keyboard.addKey('W');
        this.a = this.scene.input.keyboard.addKey('A');
        this.s = this.scene.input.keyboard.addKey('S');
        this.d = this.scene.input.keyboard.addKey('D');
		this.body.setSize(60, 39).setOffset(0, 0);
		//Animación
		this.scene.anims.create({
			key: 'pavanaRightAnimation',
			frames: scene.anims.generateFrameNumbers('pavanaRight', { start: 0, end: 6}),
			frameRate: 10,
			repeat: -1
		});
		this.play('pavanaRightAnimation');
		this.scene.anims.create({
			key: 'pavanaLeftAnimation',
			frames: scene.anims.generateFrameNumbers('pavanaLeft', { start: 0, end: 6}),
			frameRate: 10,
			repeat: -1
		});
	}

	calculateVelocity(){
		if (this.w.isDown) { // Input hacia arriba acelerando
	    	if (this.speedY > -this.maxSpeed) {
				this.speedY -= this.acceleration;
	    	}
	    }
	    else if (this.s.isDown) { // Input hacia abajo acelerando
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
	    if (this.a.isDown) { // Input hacia la izquierda acelerando
	    	if (this.speedX > -this.maxSpeed) {
				this.speedX -= this.acceleration;
	    	}
	    }
	    else if (this.d.isDown) { // Input hacia la derecha acelerando
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
	animationInput(){
		if(this.d.isDown){
			
			this.play('pavanaRightAnimation');
		}
		else if (this.a.isDown){
			
			this.play('pavanaLeftAnimation');
		}
	}
	loadLife() {
		for (var i = 0; i < this.life; i++) {
			this.lifeImages[i] = this.scene.add.image(60 * i + 40, 40, 'feather');
			this.lifeImages[i].setDepth(2);
		}
	}

	removeLife() {
		this.lifeImages[this.lifeImages.length - 1].destroy();
		this.lifeImages.length -= 1;
	}

	preUpdate(t, dt) {
		super.preUpdate(t, dt);
		var place = this.scene.parallax.checkId();
		if (place != 'hawaiiId') {
			this.score += Math.round(Math.round(dt) / 2);
		}
		this.scene.cloud.updateScore(this.score);

		if (this.tempColision > 0){
			this.tempColision -= Math.round(dt);
		}
		this.calculateVelocity();
		this.animationInput();
	    this.body.setVelocity(this.speedX, this.speedY); // Aplicamos los valores de velocidad
	}
}