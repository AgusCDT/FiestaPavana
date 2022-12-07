import Button from './Button.js';

export default class BeachButton extends Button {
    constructor(scene, cloud, audio) {
        super(scene, 'beachbutton', 500, 305, cloud, audio);
        this.purchase = audio;
        this.price = 50;
    }

    create () {
        super.create();
        this.label = this.relatedScene.add.text(this.x - 10, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        if (this.cloud.getBeach() == 1) {
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout');
        }
    }

    ClickButton() { // Compara valores para solo poder comprarla cuando tienes el dinero suficiente y cuando no la has comprado ya
        if (this.cloud.getCoins() >= this.price && this.cloud.getBeach() == 0) {
            this.purchase.play();
            this.cloud.updateCoins(this.price); // Actualiza las monedas en el localStorage
            this.cloud.upgradeBeach(); // Setea la compra en el localStorage
            this.soldout = this.relatedScene.add.image(this.x, this.y, 'soldout'); // Se añade la imagen de agotado
        }
    }
}