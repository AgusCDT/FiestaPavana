export default class Transition extends Phaser.GameObjects.Sprite{
    
	// función que maneja qué pup coge la Pavana
	// cambiando al escenario elegido

	transition(pup){
		
		if(pup == 'spacePup')
		{
			this.scene.parallax.changeBackground('space');
		}
		else if(pup == 'roadPup')
		{	
			this.scene.parallax.changeBackground('road');
		}
		else if(pup == 'seaPup')
		{
			this.scene.parallax.changeBackground('sea');
		}
		else if(pup == 'discoPup')
		{
			this.scene.parallax.changeBackground('disco');
		}
		this.scene.cleanObjects();
		this.fadeOut();
	}

	fadeOut()
	{
        var fadeOut = this.scene.add.image(0, 0, 'backgroundTransition', 0).setOrigin(0,0);
		var tween = this.scene.tweens.add({
			targets:  fadeOut,
			duration: 2000,
            ease: 'Quint.easeInOut',         
			repeat: 0,
			yoyo: false,
			alpha: {
				getStart: () => 1, // empieza con fondo negro
				getEnd: () => 0 // y termina transparente
			},
			
		});			
    }

	fadeIn(filename){
		var pup = filename;
        var fadeIn = this.scene.add.image(0, 0, 'backgroundTransition', 0).setOrigin(0,0);
		var tween = this.scene.tweens.add({
			targets:  fadeIn,
			duration: 2000,
            ease: 'Quint.easeInOut',         
			repeat: 0,
			yoyo: false,
			alpha: {
				getStart: () => 0, // empieza con fondo transparente
				getEnd: () => 1 // y termina con fondo negro
			},
			onComplete: () => this.transition(pup) // llamamos a esta función una vez se termina el fadeIn
		});			
    }
}