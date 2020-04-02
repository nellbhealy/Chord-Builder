class SceneTemplate extends Phaser.Scene{
    constructor(){
        super( { key: 'SceneTemplate' } );
    }

    preload() {
        //add scene to gameState for universal reference
        gameState.scene = this;
        this.load.image('staff', "./assets/staff.png");
        
        loadImages();
        console.log("TODO: call loadImages()");

        loadAudio();
        console.log("TODO: call loadAudio");
    }

    create(){

        //add background image
        this.add.image(0, 0, 'staff').setOrigin(0).setScale(1);

        //create the chord
        createChord("c4");
        console.log("TODO: call createChord");

       // wait a second, then ->
       // add event listeners and call appropriate functions
        let addListeners = function(scene){
            scene.input.keyboard.on('keyup-SPACE', function(event) {
                changeAccidental()
                console.log("TODO: call changeAccidental()");
            });
            
            scene.input.keyboard.on('keyup-LEFT', function(event) {
                noteLeft()
                console.log("TODO: call noteLeft()");
            });

            scene.input.keyboard.on('keyup-RIGHT', function(event) {
                noteRight()
                console.log("TODO: call noteRight()");
            });
        };

        setTimeout(addListeners(this), 1000);
        console.log(gameState.chord);
        playChord();

    }

    update(){
        //maybe check for win?
    }
}