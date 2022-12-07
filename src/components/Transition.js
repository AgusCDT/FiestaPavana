export default class Transition extends Phaser.GameObjects.Sprite {
    
	// Función que maneja qué pup coge la Pavana
	// cambiando al escenario elegido
	
	transition(pup) {	
		this.scene.cleanObjects();
		if(pup == 'spacePup')
		{	
			this.scene.music.stop();
			this.scene.parallax.changeBackground('spaceId',' ','space');
			//Paramos la música, la cambiamos y finalmente la loopeamos.
			this.scene.music = this.scene.sound.add('spaceSound');
			this.scene.music.play();
			this.scene.music.setLoop(true);
		}
		else if(pup == 'roadPup')
		{	
			this.scene.music.stop();
			this.scene.parallax.changeBackground('roadId', 'skyRoad', 'mountains', 'hills', 'road');
			//Paramos la música, la cambiamos y finalmente la loopeamos.
			this.scene.music = this.scene.sound.add('roadSound');
			this.scene.music.play();
			this.scene.music.setLoop(true);
		}
		else if(pup == 'seaPup')
		{
			this.scene.music.stop();
			this.scene.parallax.changeBackground('seaId', 'skySea', 'clouds', 'islands', 'sea');
			//Paramos la música, la cambiamos y finalmente la loopeamos.
			this.scene.music = this.scene.sound.add('seaSound');
			this.scene.music.play();
			this.scene.music.setLoop(true);
		}
		else if(pup == 'hawaiiPup')
		{
			this.scene.music.stop();
			this.scene.parallax.changeBackground('hawaiiId', 'hawaii');
			this.scene.goldenHawaii();
			//Paramos la música, la cambiamos y finalmente la loopeamos.
			this.scene.music = this.scene.sound.add('hawaiiSound');
			this.scene.music.play();
			this.scene.music.setLoop(true);
		}
		
		this.fadeOut();
	}

	fadeOut() {
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

	fadeIn(filename) {
		var pup = filename;
        var fadeIn = this.scene.add.image(0, 0, 'backgroundTransition', 0).setOrigin(0,0);
		fadeIn.setDepth(3);
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
			onComplete: () => {
				fadeIn.destroy();
				this.transition(pup);
				this.scene.updateLabelFish();
			} // llamamos a esta función una vez se termina el fadeIn
		});			
    }
}