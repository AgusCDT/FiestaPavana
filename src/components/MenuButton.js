import Button from './Button.js';

export default class MenuButton extends Button {
    constructor(scene, cloud, x, y, audio) {
        super(scene, 'menubutton', x, y, audio);
        this.sonido = audio;
        this.cloud = cloud;
    }

    ClickButton() {
        this.sonido.play();
        this.relatedScene.scene.start('menu', {cloud:this.cloud});
    }
}