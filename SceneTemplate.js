let gameState = {};

class SceneTemplate extends Phaser.Scene{
    constructor(){
        super( { key: 'SceneTemplate' } );
    }

    preload() {
        this.load.image('staff', "./assets/staff.png");
    }

    create(){
        //add keystroke listeners
        gameState.cursors = this.input.keyboard.createCursorKeys();

        //add background image
        this.add.image(0, 0, 'staff').setOrigin(0).setScale(1);
    }
}