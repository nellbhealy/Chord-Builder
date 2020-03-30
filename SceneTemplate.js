class SceneTemplate extends Phaser.Scene{
    constructor(){
        super( { key: 'SceneTemplate' } );
    }

    preload() {
        // this.load.image('staff', "./assets/staff.png");
        // this.load.image('note-black', "./assets/note-black.png");
        // this.load.image('note-red', "./assets/note-red.png");
        // this.load.audio('d4', "./assets/D4.mp3");
        
        //loadthesedamnimages(this);
    }

    create(){
        //add keystroke listeners
        gameState.cursors = this.input.keyboard.createCursorKeys();

        //add background image
        this.add.image(0, 0, 'staff').setOrigin(0).setScale(1);

        //TODO make note random?
        //hard code note for now

        gameState.note_1 = this.physics.add.sprite(x_values.one, y_values.f4, 'note-black').setScale(0.85);
        gameState.note_2 = this.physics.add.sprite(x_values.two, y_values.a4, 'note-black').setScale(0.85);
        gameState.note_3 = this.physics.add.sprite(x_values.three, y_values.c5, 'note-black').setScale(0.85);
        gameState.note_4 = this.physics.add.sprite(x_values.four, y_values.f5, 'note-black').setScale(0.85);

        gameState.d4_sound = this.sound.add('d4');
        gameState.d4_sound.play();
        
    }

    update(){
        if(gameState.cursors.left.isDown){
            this.audio.play('d4');
        }
    }
}