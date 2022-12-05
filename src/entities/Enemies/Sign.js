import Enemies from "./Enemies.js";
export default class Sign extends Enemies {
    constructor(scene, x, y, filename) {
        super(scene,x, y,filename);
        this.speedX = -75;
        this.speedY = 0;
        this.filename = filename;
        this.body.setSize(47, 116).setOffset(0, 0);
    }
    preUpdate(){
        this.body.setVelocity(this.speedX, this.speedY); 
    }
}