import Button from './Button.js';

export default class LifeButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'lifebutton', 1040, 305, cloud);
        this.price = this.cloud.getLifePrice();
        this.maxLife = 5;
    }

    create() {
        super.create();
        // Indicador de tus vidas
        this.mul = this.relatedScene.add.text(this.x - 3, this.y - 10, this.cloud.getLife(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        if (this.cloud.getLife() == this.maxLife) {
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
        }
    }

    ClickButton() { // Compara valores para solo poder comprarla cuando tienes el dinero suficiente y cuando no tienes el maximo de vidas
        if (this.cloud.getCoins() >= this.price && this.cloud.getLife() < this.maxLife) {
            this.cloud.updateCoins(this.price); // Actualiza las monedas en el localStorage
            // Aumenta el precio de las vidas con cada compra
            if (this.cloud.getLife() == 1) {
                this.price += 35;
            }
            else {
                this.price += 50;
            }
            this.cloud.upgradeLife(); // Actualiza las vidas en el localStorage
            this.cloud.updateLifePrice(this.price); // Actualiza el precio de las vidas en el localStorage
            // Actualiza el texto
            this.mul.destroy();
            this.mul = this.relatedScene.add.text(this.x - 3, this.y - 10, this.cloud.getLife(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            this.label.destroy();
            this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            // Aparece la imagen de agotado si tienes el maximo de vidas
            if (this.cloud.getLife() == this.maxLife) {
                this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
            }
        }
    }
}