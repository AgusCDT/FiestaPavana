import Enemies from "./Enemies.js";

export default class Sign extends Enemies {
    constructor(scene, x, y) {
        super(scene,x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(47, 47).setOffset(0, 0);

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
        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);
    }
}