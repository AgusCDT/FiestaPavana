import Button from './Button.js';

export default class TrophyButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'trophybutton', 880, 305, cloud);
        this.price = this.cloud.getMultiplicatorPrice();
    }

    create (){
        super.create();
        this.mul = this.relatedScene.add.text(this.x - 10, this.y - 10, this.cloud.getMultiplicator(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeMultiplicator();
            this.price *= 2;
            this.cloud.updateMultiplicatorPrice(this.price);
            this.mul.destroy();
            this.mul = this.relatedScene.add.text(this.x - 10, this.y - 10, this.cloud.getMultiplicator(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            this.label.destroy();
            this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('trophyButton');
    }
}