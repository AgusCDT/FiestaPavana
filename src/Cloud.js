export default class Cloud {
    constructor(scene) {
		this.relatedScene = scene;
	}
    preload(){
        //this.load.image('logo', './assets/PhaserLogo.png');
        //this.load.bitmapFont('font','./assets/azo-fire.png','assets/azo-fire.xml');
    };
    
    create(){
        //var txt = this.add.bitmapText(0, 0, 'font', 'HIGHSCORE:', 38).setOrigin(0);
        //this.highScoreTxt = this.add.bitmapText(txt.x+txt.width+10, 0, 'font', '0', 38).setOrigin(0);
        this.setHighScore();
    
        //var txt = this.add.bitmapText(0, 600, 'font', 'VISITS:', 20).setOrigin(0,1);
        //this.visitsTxt = this.add.bitmapText(txt.x+txt.width+10, 600, 'font', '0', 20).setOrigin(0,1);
        this.setVisits();
        console.log('Creada');
        this.updateHighScore(10);
    };
    
    setHighScore() {
        // Gets the value stored in localStorage, or 0 if nothing is found
        // Don't fortget to parseInt(), all values are stored as strings in localStorage
        this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
        //this.highScoreTxt.setText(this.highScore);
    };
    
    setVisits(){
        // Gets the value stored in localStorage, or 0 if nothing is found
        // Don't fortget to parseInt(), all values are stored as strings in localStorage
        this.visits = (parseInt(localStorage.getItem('visits')) || 0) + 1;
        //this.visitsTxt.setText(this.visits);
        // Immediately increment the stored visits counter
        localStorage.setItem('visits', this.visits);
    };
    
    updateHighScore(increment){
        console.log('Choco');
        // Updates the score and stores the new value in the localStorage
        this.highScore += increment;
        //this.highScoreTxt.setText(this.highScore);
        localStorage.setItem('highScore', this.highScore);
    };
}
 /*
 var Game = {};

 Game.preload = function(){
     Game.scene = this; // Handy reference to the scene (alternative to `this` binding)
     //this.load.image('logo', './assets/PhaserLogo.png');
     this.load.bitmapFont('font','./assets/azo-fire.png','assets/azo-fire.xml')
 };
 
 Game.create = function(){
     var txt = this.add.bitmapText(0, 0, 'font', 'SCORE:', 38).setOrigin(0);
     this.scoreTxt = this.add.bitmapText(txt.x+txt.width+10, 0, 'font', '0', 38).setOrigin(0);
     Game.setScore();
 
     var txt = this.add.bitmapText(0, 600, 'font', 'VISITS:', 20).setOrigin(0,1);
     this.visitsTxt = this.add.bitmapText(txt.x+txt.width+10, 600, 'font', '0', 20).setOrigin(0,1);
     Game.setVisits();
    
     Game.updateScore(10);
 };
 
 Game.setScore = function(){
     // Gets the value stored in localStorage, or 0 if nothing is found
     // Don't fortget to parseInt(), all values are stored as strings in localStorage
     Game.scene.score = parseInt(localStorage.getItem('score')) || 0;
     Game.scene.scoreTxt.setText(Game.scene.score);
 };
 
 Game.setVisits = function(){
     // Gets the value stored in localStorage, or 0 if nothing is found
     // Don't fortget to parseInt(), all values are stored as strings in localStorage
     Game.scene.visits = (parseInt(localStorage.getItem('visits')) || 0) + 1;
     Game.scene.visitsTxt.setText(Game.scene.visits);
     // Immediately increment the stored visits counter
     localStorage.setItem('visits',Game.scene.visits);
 };
 
 Game.updateScore = function(increment){
     // Updates the score and stores the new value in the localStorage
     Game.scene.score += increment;
     Game.scene.scoreTxt.setText(Game.scene.score);
     localStorage.setItem('score',Game.scene.score);
 };*/