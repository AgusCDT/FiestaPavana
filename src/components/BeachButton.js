import Button from './Button.js';

export default class BeachButton extends Button {
    constructor(scene) {
        super(scene, 'beachbutton', 530, 305);
        this.price = 1;
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getBeach() == 0) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeBeach();
        }
        else if (this.cloud.getBeach() == 1){
            console.log('ya esta desbloqueado');
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('beachButton');
    }
}