import Enemies from "./Enemies.js";

export default class Bomb extends Enemies {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.body.setSize(50, 50).setOffset(0, 0);
    }

    preUpdate(t, dt) {
        // Movimiento
        this.body.setGravity(0, 200);
        super.preUpdate(t, dt);
        if (this.y > 680) { // Los pups se destruyen al sobrepasar el limite para no consumir memoria
			this.scene.elementsArray = this.scene.elementsArray.filter((item) => item !== this);
			this.destroy();
		}
    }
}