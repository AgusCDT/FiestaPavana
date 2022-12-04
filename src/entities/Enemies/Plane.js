import Enemies from "./Enemies.js";

export default class Plane extends Enemies {
    constructor(scene, x, y, move) {
        super(scene, x, y);
        // elección de movimiento
        this.move = move;
        if(this.move == 1){
            this.speedX = -75;
            this.speedY = 0;
        }
        else if(this.move == 2){
            this.speedX = -75;
            this.speedY = 75;
        }
        
        this.body.setSize(90, 60).setOffset(10, 10);
        this.setScale(1.3, 1.3);
        
        // Animación
        this.scene.anims.create({
			key: 'planeAnimation',
			frames: scene.anims.generateFrameNumbers('plane', { start: 0, end: 30}),
			frameRate: 7,
			repeat: -1
		});
		this.play('planeAnimation');
    }

    preUpdate(t, dt){
        // Movimiento
        if (this.y <= 50) {             
            this.speedY *= -1;
        }
        else if (this.y >= 400) { 
            this.speedY *= -1;
        }
        if(this.move == 1) {
            this.speedX -= 1;
        }
        this.body.setVelocity(this.speedX, this.speedY);
        super.preUpdate(t, dt);
    }
}