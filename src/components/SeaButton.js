import Button from './Button.js';

export default class SeaButton extends Button {
    constructor(scene) {
        super(scene, 'seabutton', 330, 305);
        this.price = 1;
    }

    ClickButton() {
        if (this.cloud.getCoins() >= this.price && this.cloud.getSea() == 0) {
            this.cloud.updateCoins(this.price);
            this.cloud.upgradeSea();
        }
        else if (this.cloud.getSea() == 1){
            console.log('ya esta desbloqueado');
        }
        else {
            console.log('no tienes dinero');
        }
        console.log('seaButton');
    }
}