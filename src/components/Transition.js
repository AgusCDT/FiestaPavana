export default class Transition extends Phaser.GameObjects.Sprite{
    // función que maneja una transición entre escenarios,
    // utilizando un fondo negro y su opacidad 
    backgroundTransition(){
        var transition = this.scene.add.image(0, 0, 'transition', 0).setOrigin(0,0);
		var tween = this.scene.tweens.add({
			targets:  transition,
			duration: 4000,
            ease: 'Quint.easeInOut',         
			repeat: 0,
			alpha: {
				getStart: () => 1, // empieza con fondo negro
				getEnd: () => 0 // y termina transparente
			  }
		});			
    }
}