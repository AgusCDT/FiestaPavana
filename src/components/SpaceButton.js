import Button from './Button.js';

export default class SpaceButton extends Button {
    constructor(scene) {
        super(scene, 'spacebutton', 130, 305);
        this.price = 1;
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getSpace() == 0) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeSpace();
        }
        else if (this.cloud.getSpace() == 1){
            console.log('ya esta desbloqueado');
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('spaceButton');
    }
}