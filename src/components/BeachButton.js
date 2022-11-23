import Button from './Button.js';

export default class BeachButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'beachbutton', 500, 305, cloud);
        this.price = 1;
    }

    create (){
        super.create();
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 77, this.price, { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
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