import Button from './Button.js';

export default class LifeButton extends Button {
    constructor(scene) {
        super(scene, 'lifebutton', 1070, 305);
        this.price = 1;
        this.maxLife = 5;
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getLife() < this.maxLife) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeLife();
            this.price += 50;
        }
        else if (this.cloud.getLife() >= this.maxLife){
            console.log('Tienes el maximo de vidas');
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('lifeButton');
    }
}