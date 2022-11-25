export default class Enemies extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y) {
		super(scene, x, y);
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		//this.speedX = -75;
		//this.speedY = -40;
		this.setDepth(1);
		
		/*if (this.filename == 'balloon') {
			var nStart = 0;
			var nEnd = 3;
			var nFrameRate = 5;
			var nRepeat = -1;
		}
		else if (this.filename == 'plane') {
			var nStart = 0;
			var nEnd = 30;
			var nFrameRate = 7;
			var nRepeat = 0;
		}
		else if (this.filename == 'island') {
			var nStart = 0;
			var nEnd = 42;
			var nFrameRate = 3;
			var nRepeat = 0;
		}
		else if (this.filename == 'dolphin'){
			var nStart = 0;
			var nEnd = 2;
			var nFrameRate = 2;
			var nRepeat = -1;
			
			var tween = this.scene.tweens.add({
				targets:  this,
				y: {
					getStart: () => 510, 
					getEnd: () => 550 
				},
				duration: 2000,
				ease: 'Bounce.easeInOut',         
				repeat: -1,
				yoyo: true,
				angle: {
					getStart: () => 0, 
					getEnd: () => -90 
				},
			});
		}
		this.scene.anims.create({
			key: this.filename,
			frames: scene.anims.generateFrameNumbers(this.filename, { start: nStart, end: nEnd}),
			frameRate: nFrameRate,
			repeat: nRepeat
		});
		this.play(this.filename);*/
	}
	

	preUpdate(t, dt)
	{
		super.preUpdate(t, dt);
		/*if (this.move == 0){ // Movimiento estático
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
		this.body.setVelocity(this.speedX, this.speedY);*/

		if (this.scene.physics.overlap(this.scene.pavana, this)) {
			if (this.scene.pavana.tempColision <= 0) { // Solo puede quitar vida si llevo cierto tiempo después de la anterior colisión
				this.scene.pavana.life -= 1;
				this.scene.pavana.removeLife();
				//this.scene.pavana.lifeImages[this.scene.pavana.life - 1].destroy();
				if (this.scene.pavana.life <= 0) {
					this.scene.pavana.destroy();
					this.scene.cloud.updateHighScore(this.scene.pavana.score);
					this.scene.scene.start('GameOver', {cloud: this.scene.cloud});
				}
				this.scene.pavana.label.text = "Life: " + this.scene.pavana.life;
				this.scene.pavana.tempColision = 150;
			}
		}

		if (this.x < -80) { // Los enemigos se destruyen al sobrepasar la izquierda para no consumir memoria
			this.destroy();
		}
	}
}