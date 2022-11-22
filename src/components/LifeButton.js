import Button from './Button.js';

export default class LifeButton extends Button {
    constructor(scene) {
        super(scene, 'lifebutton', 1070, 305);
    }

    ClickButton() {
        console.log('lifeButton');
    }
}