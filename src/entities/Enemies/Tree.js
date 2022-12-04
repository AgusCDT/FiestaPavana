import Enemies from "./Enemies.js";
export default class Tree extends Enemies {
    constructor(scene, x, y) {
        super(scene,x, y);
        this.speedX = -75;
        this.speedY = 0;
        this.body.setSize(102, 116).setOffset(0, 0);
        // Animación
        this.scene.anims.create({
			key: 'treeAnimation',
			frames: scene.anims.generateFrameNumbers('tree1', { start: 0, end: 9}),
			frameRate: 7,
			repeat: -1
		});
		this.play('treeAnimation');
    }
    preUpdate(t, dt){
        this.body.setVelocity(this.speedX, this.speedY);  
        super.preUpdate(t, dt);
        
    }
}