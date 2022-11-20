export default class Enemies extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y, filename, move) {
		super(scene, x, y, filename, move);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.speedX = -75;
		this.speedY = -40;
		this.move = move;
		this.setDepth(1);
		/*this.anims.create({
			key: animationId,
			frames: this.anims.generateFrameNumbers(filename, { start: 0, end: 7 }),
			frameRate: 7,
			repeat: -1,
			yoyo: true,
		  });*/		
	}
	
	preUpdate()
	{	
		if (this.move == 0){ // Movimiento estático
			this.speedY = 0;
		}
		else if (this.move == 1) { // Movimiento vertical
			if (this.y <= 0){
				this.speedY *= -1;
			}
			else if (this.y >= 500){
				this.speedY *= -1;
			}
		}
		else if (this.move == 2) { // Movimiento acelarado hacia la izquierda
			this.speedX -= 1;
			this.speedY = 0;
		}
		else if (this.move == 3) { // Movimiento en picado 
			this.speedX -= 1;
			this.speedY += 0.5;
		}
		this.body.setVelocity(this.speedX, this.speedY);

		if (this.scene.physics.overlap(this.scene.pavana, this)) {
			if (this.scene.pavana.tempColision <= 0) { // Solo puede quitar vida si llevo cierto tiempo después de la anterior colisión
				this.scene.pavana.life -= 1;
				if (this.scene.pavana.life <= 0) {
					this.scene.pavana.destroy();
					this.scene.cloud.updateHighScore(this.scene.pavana.score);
					this.scene.scene.start('GameOver');
				}
				this.scene.pavana.label.text = "Life: " + this.scene.pavana.life;
				this.scene.pavana.tempColision = 150;
			}
		}

		if (this.x < -50){ // Los enemigos se destruyen al sobrepasar la izquierda para no consumir memoria
			this.destroy();
		}
	}
}