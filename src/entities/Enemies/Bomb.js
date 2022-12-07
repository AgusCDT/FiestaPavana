import Enemies from "./Enemies.js";

export default class Bomb extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.body.setSize(30, 50).setOffset(10, 0);

        // Animación
        this.scene.anims.create({
			key: 'bombAnimation',
			frames: scene.anims.generateFrameNumbers('bomb', { start: 0, end: 0}),
			frameRate: 2,
			repeat: -1
		});
		this.play('bombAnimation');
    }

    onDestroyBomb(){
        if (this.y > 680) { // Los pups se destruyen al sobrepasar el limite para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
		}
    }

    preUpdate(t, dt) {
        // Movimiento
        this.body.setGravity(0, 200);
        super.preUpdate(t, dt);
        this.onDestroyBomb();
    }
}