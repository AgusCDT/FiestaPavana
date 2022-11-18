export default class Transition extends Phaser.GameObjects.Sprite{
    // función que maneja una transición entre escenarios,
    // utilizando un fondo negro y su opacidad 
    backgroundTransition(){
        var transition = this.scene.add.image(0, 0, 'transition', 0).setOrigin(0,0);
		var tween = this.scene.tweens.add({
			targets:  transition,
			duration: 2000,
            ease: 'Quint.easeInOut',         
			repeat: 0,
			yoyo: true,
			alpha: {
				getStart: () => 0, // empieza con fondo negro
				getEnd: () => 1 // y termina transparente
			},
			onComplete: transicion()
		});			
    }
transicion(){
	this.scene.parallax.changeBackground('space');
}
	transition(){
		
		if(this.scene.pup.filename == 'spacePup'){
			
			this.scene.time.addEvent({
				delay: 2000, 
        callback: this.scene.parallax.changeBackground,
        callbackScope: this.scene
				
			});							
			this.backgroundTransition();
			
		}
		else if(this.scene.pup.filename == 'roadPup'){	
			
			this.scene.time.addEvent({
				delay: 2000, 
        callback: this.scene.parallax.changeBackground,
        callbackScope: this.scene
				
			});	
			this.backgroundTransition();									
			
			
		}
	}
}