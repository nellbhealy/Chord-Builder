class SceneTemplate extends Phaser.Scene{
    constructor(){
        super( { key: 'SceneTemplate' } );
    }

    preload() {
        this.load.image('staff', "./assets/staff.png");
        //loadImages();
        console.log("TODO: call loadImages()");
        //loadAudio();
        console.log("TODO: call loadAudio");
    }

    create(){

        //add scene to gameState for universal reference
        gameState.scene = this;

        //add background image
        this.add.image(0, 0, 'staff').setOrigin(0).setScale(1);

        // gameState.note_1 = this.physics.add.sprite(x_values.one, y_values.f4, 'note-black').setScale(0.85);
        // gameState.note_2 = this.physics.add.sprite(x_values.two, y_values.a4, 'note-black').setScale(0.85);
        // gameState.note_3 = this.physics.add.sprite(x_values.three, y_values.c5, 'note-black').setScale(0.85);
        // gameState.note_4 = this.physics.add.sprite(x_values.four, y_values.f5, 'note-black').setScale(0.85);
        
        //create the chord
       // createChord();
       console.log("TODO: call createChord");

       // wait a second, then ->
       // add event listeners and call appropriate functions
        let addListeners = function(scene){
            scene.input.keyboard.on('keyup-SPACE', function(event) {
                //changeAccidental()
                console.log("TODO: call changeAccidental()");
            });
            
            scene.input.keyboard.on('keyup-LEFT', function(event) {
                //noteLeft()
                console.log("TODO: call noteLeft()");
            });

            scene.input.keyboard.on('keyup-RIGHT', function(event) {
                //noteRight()
                console.log("TODO: call noteRight()");
            });
        };

        setTimeout(addListeners(this), 1000);
    }

    update(){
        //maybe check for win?
    }
}