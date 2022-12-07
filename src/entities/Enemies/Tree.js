import Enemies from "./Enemies.js";

export default class Tree extends Enemies {
    constructor(scene, x, y) {
        super(scene,x, y);
        this.speedX = -47;
        this.speedY = 0;
        this.body.setSize(85, 100).setOffset(10, 10);
        this.setScale(1.5, 1.5);
        this.setDepth(2);
        
        // Animación
        this.scene.anims.create({
			key: 'treeAnimation',
			frames: scene.anims.generateFrameNumbers('tree1', { start: 0, end: 9}),
			frameRate: 7,
			repeat: -1
		});
		this.play('treeAnimation');
    }
    
    preUpdate(t, dt) {
        // Velocidad incremental
        this.speed = this.speedX * (this.scene.gameTime/10);
        // Movimiento
        this.body.setVelocity(this.speed, this.speedY);  
        super.preUpdate(t, dt); 
    }
}