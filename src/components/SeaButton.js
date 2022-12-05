import Button from './Button.js';

export default class SeaButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'seabutton', 330, 305, cloud);
        this.price = 30;
    }

    create (){
        super.create();
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        if (this.cloud.getSea() == 1) {
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
        }
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getSea() == 0) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeSea();
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
        }
    }
}