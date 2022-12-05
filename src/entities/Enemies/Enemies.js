export default class Enemies extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y);
		this.scene.enemy = this;
		this.scene.add.existing(this);
    	this.scene.physics.add.existing(this);
		this.setDepth(1);
	}
	
	colision() {
		if (this.scene.physics.overlap(this.scene.pavana, this)) {
			this.scene.pavana.enemyColision();
		}
	}

	onDestroy() {
		if (this.x < -90) { // Los enemigos se destruyen al sobrepasar la izquierda para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
		}
	}
	
	preUpdate(t, dt) {
		super.preUpdate(t, dt);
		this.colision();
		this.onDestroy();
	}
}