import Button from './Button.js';

export default class TrophyButton extends Button {
    constructor(scene) {
        super(scene, 'trophybutton', 850, 305);
        this.price = 73;
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeMultiplicator();
            this.price *= 2;
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('trophyButton');
    }
}