let loadImages = function() {
    gameState.scene.load.image('note-black', "assets/note-black.png");
    gameState.scene.load.image('black-flat', "assets/black-flat.png");
    gameState.scene.load.image('black-sharp', "assets/black-sharp.png");
}

function loadAudio() {
    gameState.scene.load.audio('a3', "assets/notes trimmed/A3.mp3");
    gameState.scene.load.audio('a4', "assets/notes trimmed/A4.mp3");
    gameState.scene.load.audio('ab3', "assets/notes trimmed/Ab3.mp3");
    gameState.scene.load.audio('ab4', "assets/notes trimmed/Ab4.mp3");
    gameState.scene.load.audio('b3', "assets/notes trimmed/B3.mp3");
    gameState.scene.load.audio('b4', "assets/notes trimmed/B4.mp3");
    gameState.scene.load.audio('bb3', "assets/notes trimmed/Bb3.mp3");
    gameState.scene.load.audio('bb4', "assets/notes trimmed/Bb4.mp3");
    gameState.scene.load.audio('c4', "assets/notes trimmed/C4.mp3");
    gameState.scene.load.audio('c5', "assets/notes trimmed/C5.mp3");
    gameState.scene.load.audio('d4', "assets/notes trimmed/D4.mp3");
    gameState.scene.load.audio('d5', "assets/notes trimmed/D5.mp3");
    gameState.scene.load.audio('db4', "assets/notes trimmed/Db4.mp3");
    gameState.scene.load.audio('db5', "assets/notes trimmed/Db5.mp3");
    gameState.scene.load.audio('e4', "assets/notes trimmed/E4.mp3");
    gameState.scene.load.audio('eb4', "assets/notes trimmed/Eb4.mp3");
    gameState.scene.load.audio('eb5', "assets/notes trimmed/Eb5.mp3");
    gameState.scene.load.audio('f4', "assets/notes trimmed/F4.mp3");
    gameState.scene.load.audio('f5', "assets/notes trimmed/F5.mp3");
}

function createChord(chord_name) {
    gameState.currentNote = "first";
    //create chord object inside of gameState
    gameState.chord = {};
    gameState.chord.name = chord_name;

    //first note
    gameState.chord.first = {};
    gameState.chord.first.name = majorChords[chord_name].first;
    gameState.chord.first.image = gameState.scene.physics.add.sprite(x_values.one, y_values[gameState.chord.first.name]).setScale(0.85);

    //accidental image is a sprite located to the left of each note image, initialized to be invisible since the note's accidental is tbd

    //not sure if 50 pixels to the left of the note is a good distance away, so we can change later
    gameState.chord.first.accidentalImage = gameState.scene.physics.add.sprite(x_values.one-50, 'black-flat');
    gameState.chord.first.accidentalImage.sprite.setVisible(false);
    //gameState.chord.first.sound = gameState.scene.sound.add([gameState.chord.first.name]);
    if (majorChords[chord_name].first.firstAccidental != undefined){
        gameState.chord.first.accidental = majorChords[chord_name].first.firstAccidental;
        updateNote();
    } else {
        gameState.chord.first.accidental = "natural";
    }
   

    gameState.currentNote = "third";
    //third note
    gameState.chord.third = {};
    gameState.chord.third.name = majorChords[chord_name].third;
    gameState.chord.third.image = gameState.scene.physics.add.sprite(x_values.two, y_values[gameState.chord.third.name]).setScale(0.85);

    gameState.chord.third.accidentalImage = gameState.scene.physics.add.sprite(x_values.two-50, 'black-flat');
    gameState.chord.third.accidentalImage.sprite.setVisible(false);
    //gameState.chord.third.sound = gameState.scene.sound.add([gameState.chord.third.name]);
    randomizeAccidental("third");
    updateNote();
    

    gameState.currentNote = "fifth";
    //fifth note
    gameState.chord.fifth = {};
    gameState.chord.fifth.name = majorChords[chord_name].fifth;
    gameState.chord.fifth.image = gameState.scene.physics.add.sprite(x_values.three, y_values[gameState.chord.fifth.name]).setScale(0.85);
    gameState.chord.fifth.accidentalImage = gameState.scene.physics.add.sprite(x_values.three-50, 'black-flat');
    gameState.chord.fifth.accidentalImage.sprite.setVisible(false);
    //gameState.chord.fifth.sound = gameState.scene.sound.add([gameState.chord.fifth.name]);
    randomizeAccidental("fifth");
    updateNote();
    

    gameState.currentNote = "seventh";
    //seventh note
    gameState.chord.seventh = {};
    gameState.chord.seventh.name = majorChords[chord_name].seventh;
    gameState.chord.seventh.image = gameState.scene.physics.add.sprite(x_values.one, y_values[gameState.chord.seventh.name]).setScale(0.85);
    gameState.chord.seventh.accidentalImage = gameState.scene.physics.add.sprite(x_values.four-50, 'black-flat');
    gameState.chord.seventh.accidentalImage.sprite.setVisible(false);
    //gameState.chord.seventh.sound = gameState.scene.sound.add([gameState.chord.seventh.name]);
    randomizeAccidental("seventh");
    updateNote();
    
    
    gameState.currentNote = "first";
}

function createAnimations(){
    /*gameState.scene.anims.create({
        key: 'natural',
        frames: [{key: 'note-black',  frame: 0}],
        frameRate: 50,
    });*/

    gameState.scene.anims.create({
        key: 'sharp',
        frames: [{key:'black-sharp', frame: 0}],
        frameRate: 50,
    });

    gameState.scene.anims.create({
        key: 'flat',
        frames: [{key:'black-flat', frame: 0}],
        frameRate: 50,
    });
}



function updateNote(){
    if (gameState.chord[gameState.currentNote].accidental == 'flat'){
        //change note's sound
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].flatNote);
        //make accidental sprite visible and change note's accidental image
        gameState.chord[gameState.currentNote].accidentalImage.sprite.setVisible(true);
        gameState.chord[gameState.currentNote].accidentalImage.anims.play('flat', true);
    } else if (gameState.chord[gameState.currentNote].accidental == 'natural'){
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].name);
        //make accidental sprite invisible
        gameState.chord[gameState.currentNote].accidentalImage.sprite.setVisible(false);
    } else if (gameState.chord[gameState.currentNote].accidental == 'sharp'){
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].sharpNote);
         //make accidental sprite visible and change note's accidental image
        gameState.chord[gameState.currentNote].accidentalImage.sprite.setVisible(true);
        gameState.chord[gameState.currentNote].accidentalImage.anims.play('sharp', true);
    }
    playNote();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    //-1 indicates flat, 0 indicates natural, 1 indicates sharp
}


function randomizeAccidental(note) {
    var value = getRandomIntInclusive(-1, 1);
    if (value == -1) {
        gameState.chord[note].accidental = 'flat';
    } else if (value == 0) {
        gameState.chord[note].accidental = 'natural';
    } else {
        gameState.chord[note].accidental = 'sharp';
    }
}

function changeAccidental() {
   if (gameState.chord[gameState.currentNote].accidental == 'flat'){
       gameState.chord[gameState.currentNote].accidental = 'natural';
       updateNote();
   } else if (gameState.chord[gameState.currentNote].accidental == 'natural'){
        gameState.chord[gameState.currentNote].accidental = 'sharp';
        updateNote();
   } else {
        gameState.chord[gameState.currentNote].accidental = 'flat';
        updateNote();
   }
}

function noteLeft(){
    if (gameState.currentNote == 'first') {
        gameState.currentNote = 'seventh';
        playNote();
    } else if (gameState.currentNote == 'third'){
        gameState.currentNote = 'first';
        playNote();
    } else if (gameState.currentNote == 'fifth') {
        gameState.currentNote = 'third';
        playNote();
    } else {
        gameState.currentNote = 'fifth';
        playNote();
    }
}

function noteRight() {
    if (gameState.currentNote == 'seventh') {
        gameState.currentNote = 'first';
        playNote();
    } else if (gameState.currentNote == 'third'){
        gameState.currentNote = 'fifth';
        playNote();
    } else if (gameState.currentNote == 'fifth') {
        gameState.currentNote = 'seventh';
        playNote();
    } else {
        gameState.currentNote = 'third';
        playNote();
    }
}

function playNote() {
    gameState.chord[gameState.currentNote].sound.play();
}

function playChord() {
    gameState.chord.first.sound.play();
    gameState.chord.third.sound.play();
    gameState.chord.fifth.sound.play();
    gameState.chord.seventh.sound.play();
}


/*
*  isCorrect()
* switchAccidental()
* playNote()
* newChord()
*/ 