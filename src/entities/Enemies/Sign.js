import Enemies from "./Enemies.js";
export default class Sign extends Enemies {
    constructor(scene, x, y) {
        super(scene,x, y);
        this.speedX = -46;
        this.speedY = 0;
        this.body.setSize(47, 47).setOffset(0, 0);
        this.setDepth(2);
        // Animación
        this.scene.anims.create({
			key: 'signAnimation',
			frames: scene.anims.generateFrameNumbers('sign', { start: 0, end: 0}),
			frameRate: 2,
			repeat: -1
		});
		this.play('signAnimation');
    }
    preUpdate(t, dt) {
        // Velocidad incremental
        this.speed = this.speedX * (this.scene.gameTime/10);
        // Movimiento
        this.body.setVelocity(this.speed, this.speedY);
        super.preUpdate(t, dt);
    }
}