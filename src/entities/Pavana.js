import Bomb from '../entities/Enemies/Bomb.js';

export default class Pavana extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y,'pavana');
		this.setDepth(1);
		this.audio = this.scene.sound.add('damage');
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
    	this.body.setCollideWorldBounds();	
		this.score = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.maxSpeed = 400;
		this.acceleration = 10;
		this.deceleration = 10;
		this.rightAnim = true; // Indica si se esta ejecutando la animacion hacia la derecha
		this.leftAnim = false; // Indica si se esta ejecutando la animacion hacia la izquierda
		this.stoppedAnimationDeath = true; // Indica si se ha acabado la animacion de colision
		this.life = this.scene.cloud.getLife();
		this.multiplicator = this.scene.cloud.getMultiplicator();
		this.lifeImages = [];
		this.tempColision = 2000; // ms
		this.w = this.scene.input.keyboard.addKey('W');
        this.a = this.scene.input.keyboard.addKey('A');
        this.s = this.scene.input.keyboard.addKey('S');
        this.d = this.scene.input.keyboard.addKey('D');
		this.body.setSize(55, 30).setOffset(10, 5);
		this.noMove=0;
		//Animación
		this.scene.anims.create({
			key: 'pavanaRightAnimation',
			frames: scene.anims.generateFrameNumbers('pavanaRight', { start: 0, end: 6}),
			frameRate: 10,
			repeat: -1
		});
		
		this.scene.anims.create({
			key: 'pavanaLeftAnimation',
			frames: scene.anims.generateFrameNumbers('pavanaLeft', { start: 0, end: 6}),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({ // Animacion de colision hacia la izquierda
			key: 'pavanaLeftAnimationDeath',
			frames: scene.anims.generateFrameNumbers('pavanaLeftDeath', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({ // Animacion de colision hacia la derecha
			key: 'pavanaRightAnimationDeath',
			frames: scene.anims.generateFrameNumbers('pavanaRightDeath', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});
		this.play('pavanaRightAnimation'); // Comienza con animacion hacia la derecha
	}

	calculateVelocity() {
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
			if (!this.leftAnim) {
				this.leftAnim = true;
				this.rightAnim = false;
				if (this.stoppedAnimationDeath) { // Si ha acabado la animacion de colision empieza la animación hacia la izquierda si no está empezada
					this.play('pavanaLeftAnimation');
				}
				else { // Si no ha acabado la animacion de colision se sigue con ella
					this.play('pavanaLeftAnimationDeath');
				}
			}
	    	if (this.speedX > -this.maxSpeed) {
				this.speedX -= this.acceleration;
	    	}
	    }
	    else if (this.d.isDown) { // Input hacia la derecha acelerando
			if (!this.rightAnim) {
				this.leftAnim = false;
				this.rightAnim = true;
				if (this.stoppedAnimationDeath) { // Si ha acabado la animacion de colision empieza la animación hacia la derecha si no está empezada
					this.play('pavanaRightAnimation');
				}
				else { // Si no ha acabado la animacion de colision se sigue con ella
					this.play('pavanaRightAnimationDeath');
				}
			}
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

	loadLife() {
		for (var i = 0; i < this.life; i++) {
			this.lifeImages[i] = this.scene.add.image(60 * i + 40, 40, 'feather');
			this.lifeImages[i].setDepth(2);
		}
	}

	enemyColision() {
		if (this.tempColision <= 0) { // Solo puede quitar vida si llevo cierto tiempo después de la anterior colisión
			// Comienza la animacion de colision
			this.audio.play();
			if (this.leftAnim) {
				this.play('pavanaLeftAnimationDeath');
			}
			else if (this.rightAnim) {
				this.play('pavanaRightAnimationDeath');
			}
			this.life -= 1;
			this.removeLife();
			if (this.life <= 0) {
				this.scene.cloud.updateHighScore(this.score);
				this.scene.music.stop();
				this.scene.scene.start('GameOver', {cloud: this.scene.cloud});
				this.destroy();
			}
			this.tempColision = 2000;
			this.stoppedAnimationDeath = false;
		}
	}

	tColision(dt) {
		if (this.tempColision > 0){
			this.tempColision -= Math.round(dt);
		}
		else {
			// Cuando acaba el periodo de invulnerabilidad se cambia a animaciones de desplazamiento
			if (!this.stoppedAnimationDeath) {
				if (this.leftAnim) {
					this.play('pavanaLeftAnimation');
				}
				else if (this.rightAnim) {
					this.play('pavanaRightAnimation');
				}
				this.stoppedAnimationDeath = true;
			}
			
		}
	}

	removeLife() {
		this.lifeImages[this.lifeImages.length - 1].destroy();
		this.lifeImages.length -= 1;
	}

	noMovePunishment(dt) {
		if(!this.a.isDown && !this.d.isDown && !this.w.isDown && !this.s.isDown)
		{
			this.noMove+=dt/1000;
			
			if(parseInt(this.noMove)>=5)
			{
				if (this.lifeImages.length > 0){
					this.scene.elementsArray.push(new Bomb(this.scene, this.x, -70));
					this.noMove=0;
				}
				else {
					this.scene.music.stop();
					this.scene.scene.start('GameOver', {cloud: this.scene.cloud});					
				}
				
			}
		}
		else
		{
			this.noMove=0;
		}
	}

	calculateScore(dt){
		var place = this.scene.parallax.checkId();
		if (place != 'hawaiiId') {
			this.score += Math.round((dt / 2) * this.scene.cloud.getMultiplicator());
		}
		this.scene.cloud.updateScore(this.score);
	}

	preUpdate(t, dt) {
		super.preUpdate(t, dt);
		this.calculateScore(dt);
		this.tColision(dt);
		this.calculateVelocity();
	    this.body.setVelocity(this.speedX, this.speedY); // Aplicamos los valores de velocidad
		this.noMovePunishment(dt);
	}
}