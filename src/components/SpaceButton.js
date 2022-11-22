import Button from './Button.js';

export default class SpaceButton extends Button {
    constructor(scene) {
        super(scene, 'spacebutton', 160, 305);
        this.price = 20000;
    }

    create (){
        super.create();
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 77, this.price, { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
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