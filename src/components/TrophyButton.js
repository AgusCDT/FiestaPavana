import Button from './Button.js';

export default class TrophyButton extends Button {
    constructor(scene) {
        super(scene, 'trophybutton', 880, 305);
        this.price = 1;
    }

    create (){
        super.create();
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 77, this.price, { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
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