import Button from './Button.js';

export default class TrophyButton extends Button {
    constructor(scene, cloud, audio) {
        super(scene, 'trophybutton', 880, 305, cloud, audio);
        this.purchase = audio;
        this.price = this.cloud.getMultiplicatorPrice();
    }

    create () {
        super.create();
        // Indicador de tu multiplicador
        this.mul = this.relatedScene.add.text(this.x - 14, this.y - 10, this.cloud.getMultiplicator(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        this.label = this.relatedScene.add.text(this.x - 12, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
    }

    ClickButton() { // Compara valores para solo poder comprar cuando tienes el dinero suficiente (no hay limite)
        if (this.cloud.getCoins() >= this.price) {
            this.purchase.play();
            this.cloud.updateCoins(this.price); // Actualiza las monedas en el localStorage
            this.cloud.upgradeMultiplicator(); // Actualiza el multiplicador en el localStorage
            this.price += 50; // Aumenta el precio del multiplicador con cada compra
            this.cloud.updateMultiplicatorPrice(this.price); // Actualiza el precio del multiplicador en el localStorage
            // Actualiza el texto
            this.mul.destroy();
            this.mul = this.relatedScene.add.text(this.x - 14, this.y - 10, this.cloud.getMultiplicator(), { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
            this.label.destroy();
            this.label = this.relatedScene.add.text(this.x - 12, this.y + 70, this.price, { fontFamily: 'Cooper Black', fontSize: 25, color: '#E10000' });
        }
    }
}