function loadImages() {
    gameState.scene.load.image('note-black', "assets/note-black.png");
    gameState.scene.load.image('black-flat', "assets/black-flat.png");
    gameState.scene.load.image('black-sharp', "assets/black-sharp.png");
}

function loadAudio() {
    gameState.scene.load.audio('a3', "assets/notes/Piano.ff.A3.mp3");
    gameState.scene.load.audio('a4', "assets/notes/Piano.ff.A4.mp3");
    gameState.scene.load.audio('ab3', "assets/notes/Piano.ff.Ab3.mp3");
    gameState.scene.load.audio('ab4', "assets/notes/Piano.ff.Ab4.mp3");
    gameState.scene.load.audio('b3', "assets/notes/Piano.ff.B3.mp3");
    gameState.scene.load.audio('b4', "assets/notes/Piano.ff.B4.mp3");
    gameState.scene.load.audio('bb3', "assets/notes/Piano.ff.Bb3.mp3");
    gameState.scene.load.audio('bb4', "assets/notes/Piano.ff.Bb4.mp3");
    gameState.scene.load.audio('c4', "assets/notes/Piano.ff.C4.mp3");
    gameState.scene.load.audio('c5', "assets/notes/Piano.ff.C5.mp3");
    gameState.scene.load.audio('d4', "assets/notes/Piano.ff.D4.mp3");
    gameState.scene.load.audio('d5', "assets/notes/Piano.ff.D5.mp3");
    gameState.scene.load.audio('db4', "assets/notes/Piano.ff.Db4.mp3");
    gameState.scene.load.audio('db5', "assets/notes/Piano.ff.Db5.mp3");
    gameState.scene.load.audio('e4', "assets/notes/Piano.ff.e4.mp3");
    gameState.scene.load.audio('eb4', "assets/notes/Piano.ff.Eb4.mp3");
    gameState.scene.load.audio('eb5', "assets/notes/Piano.ff.Eb5.mp3");
    gameState.scene.load.audio('f4', "assets/notes/Piano.ff.F4.mp3");
    gameState.scene.load.audio('f5', "assets/notes/Piano.ff.F5.mp3");
}

function createChord(chord_name) {
    gameState.chord.name = chord_name;

    //first note
    gameState.chord.first.name = majorChords[chord_name].first;
    //does assigning sound like this work??
    gameState.chord.first.sound = gameState.scene.sound.add([gameState.chord.first.name]);
    gameState.chord.first.accidental = majorChords[chord_name].first.firstAccidental;
    gameState.chord.first.image = gameState.scene.physics.add.sprite(x_values.one, y_values[gameState.chord.first.name]).setScale(0.85);

    //third note
    gameState.chord.third.name = majorChords[chord_name].third;
    gameState.chord.third.sound = gameState.scene.sound.add([gameState.chord.third.name]);
    randomizeAccidental(third);
    gameState.chord.third.image = gameState.scene.physics.add.sprite(x_values.two, y_values[gameState.chord.third.name]).setScale(0.85);

    //fifth note
    gameState.chord.fifth.name = majorChords[chord_name].fifth;
    gameState.chord.fifth.sound = gameState.scene.sound.add([gameState.chord.fifth.name]);
    randomizeAccidental(fifth);
    gameState.chord.fifth.image = gameState.scene.physics.add.sprite(x_values.three, y_values[gameState.chord.fifth.name]).setScale(0.85);

    //seventh note
    gameState.chord.seventh.name = majorChords[chord_name].seventh;
    gameState.chord.seventh.sound = gameState.scene.sound.add([gameState.chord.seventh.name]);
    randomizeAccidental(seventh);
    gameState.chord.seventh.image = gameState.scene.physics.add.sprite(x_values.one, y_values[gameState.chord.seventh.name]).setScale(0.85);
    
}

function createAnimations(){
    gameState.scene.anims.create({
        key: 'natural',
        frames: [{key: 'note-black',  frame: 0}],
        frameRate: 50,
    });

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
        //change note's image
        gameState.chord[gameState.currentNote].anims.play('flat', true);
    } else if (gameState.chord[gameState.currentNote].accidental == 'natural'){
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].name);
        gameState.chord[gameState.currentNote].anims.play('natural', true);
    } else if (gameState.chord[gameState.currentNote].accidental == 'sharp'){
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].sharpNote);
        gameState.chord[gameState.currentNote].anims.play('sharp', true);
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