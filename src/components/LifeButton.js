import Button from './Button.js';

export default class LifeButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'lifebutton', 1040, 305, cloud);
        this.price = this.cloud.getLifePrice();
        this.maxLife = 5;
    }

    create (){
        super.create();
        this.mul = this.relatedScene.add.text(this.x - 3, this.y - 10, this.cloud.getLife(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        if (this.cloud.getLife() == this.maxLife) {
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
        }
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getLife() < this.maxLife) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeLife();
            this.price += 50;
            this.cloud.updateLifePrice(this.price);
            this.mul.destroy();
            this.mul = this.relatedScene.add.text(this.x - 3, this.y - 10, this.cloud.getLife(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            this.label.destroy();
            this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            if (this.cloud.getLife() == this.maxLife) {
                this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
            }
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