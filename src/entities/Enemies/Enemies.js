export default class Enemies extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y) {
		super(scene, x, y);
		this.scene.enemy = this;
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.setDepth(1);
	}
	
	colision() {
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
				this.scene.pavana.tempColision = 2000;
			}
		}
	}

	preUpdate(t, dt)
	{
		super.preUpdate(t, dt);
		this.colision();
		
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

		

		if (this.x < -90) { // Los enemigos se destruyen al sobrepasar la izquierda para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
		}
	}
}