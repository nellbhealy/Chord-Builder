let loadImages = function() {
  gameState.scene.load.image("note-black", "assets/note-black.png");
  gameState.scene.load.image("black-flat", "assets/black-flat.png");
  gameState.scene.load.image("black-sharp", "assets/black-sharp.png");
};

function loadAudio() {
<<<<<<< HEAD
  gameState.scene.load.audio("a3", "assets/notes trimmed/A3.mp3");
  gameState.scene.load.audio("a4", "assets/notes trimmed/A4.mp3");
  gameState.scene.load.audio("ab3", "assets/notes trimmed/Ab3.mp3");
  gameState.scene.load.audio("ab4", "assets/notes trimmed/Ab4.mp3");
  gameState.scene.load.audio("b3", "assets/notes trimmed/B3.mp3");
  gameState.scene.load.audio("b4", "assets/notes trimmed/B4.mp3");
  gameState.scene.load.audio("bb3", "assets/notes trimmed/Bb3.mp3");
  gameState.scene.load.audio("bb4", "assets/notes trimmed/Bb4.mp3");
  gameState.scene.load.audio("c4", "assets/notes trimmed/C4.mp3");
  gameState.scene.load.audio("c5", "assets/notes trimmed/C5.mp3");
  gameState.scene.load.audio("d4", "assets/notes trimmed/D4.mp3");
  gameState.scene.load.audio("d5", "assets/notes trimmed/D5.mp3");
  gameState.scene.load.audio("db4", "assets/notes trimmed/Db4.mp3");
  gameState.scene.load.audio("db5", "assets/notes trimmed/Db5.mp3");
  gameState.scene.load.audio("e4", "assets/notes trimmed/E4.mp3");
  gameState.scene.load.audio("eb4", "assets/notes trimmed/Eb4.mp3");
  gameState.scene.load.audio("eb5", "assets/notes trimmed/Eb5.mp3");
  gameState.scene.load.audio("f4", "assets/notes trimmed/F4.mp3");
  gameState.scene.load.audio("f5", "assets/notes trimmed/F5.mp3");
=======
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
    gameState.scene.load.audio('g1', "assets/notes trimmed/G1.mp3");
    gameState.scene.load.audio('gb1', "assets/notes trimmed/Gb1.mp3");
>>>>>>> 2aa625e86e36f93bebb9df105f3ae56d603a80e9
}

function createNote(position) {
  gameState.currentNote = position;
  gameState.chord[position] = {};

  //use local variable for increased readability
  let note = gameState.chord[position];

  //set note's name
  note.name = majorChords[gameState.chord.name][position];

  //add note's image to screen
  note.image = gameState.scene.physics.add
    .sprite(x_values[position], y_values[note.name])
    .setScale(0.85);

  //create image for flat accidental and set visibility to false
  note.accidentalImage = gameState.scene.physics.add.sprite(
    x_values[position] - 50,
    "black-flat"
  );
  note.accidentalImage.setVisible(false);

  if (position != "first") randomizeAccidental(position);
  else setFirstAccidental();
}

function createChord(chord_name) {
  //create chord object inside of gameState
  gameState.chord = {};
  gameState.chord.name = chord_name;

  //create notes
  createNote("first");
  createNote("third");
  createNote("fifth");
  createNote("seventh");

  //set current note back to first for gameplay
  gameState.currentNote = "first";
}

function createAnimations() {
  /*gameState.scene.anims.create({
        key: 'natural',
        frames: [{key: 'note-black',  frame: 0}],
        frameRate: 50,
    });*/

  gameState.scene.anims.create({
    key: "sharp",
    frames: [{ key: "black-sharp", frame: 0 }],
    frameRate: 50
  });

  gameState.scene.anims.create({
    key: "flat",
    frames: [{ key: "black-flat", frame: 0 }],
    frameRate: 50
  });
}

<<<<<<< HEAD
function updateNote() {
  if (gameState.chord[gameState.currentNote].accidental == "flat") {
    //change note's sound
    gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(
      gameState.chord[gameState.currentNote].flatNote
    );
    //make accidental sprite visible and change note's accidental image
    gameState.chord[gameState.currentNote].accidentalImage.setVisible(true);
    // gameState.chord[gameState.currentNote].accidentalImage.anims.play(
    //   "flat",
    //   true
    // );
  } else if (gameState.chord[gameState.currentNote].accidental == "natural") {
    gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(
      gameState.chord[gameState.currentNote].name
    );
    //make accidental sprite invisible
    gameState.chord[gameState.currentNote].accidentalImage.setVisible(false);
  } else if (gameState.chord[gameState.currentNote].accidental == "sharp") {
    gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(
      gameState.chord[gameState.currentNote].sharpNote
    );
    //make accidental sprite visible and change note's accidental image
    gameState.chord[gameState.currentNote].accidentalImage.setVisible(true);
    //gameState.chord[gameState.currentNote].accidentalImage.anims.play(
    //  "sharp",
    //  true
    //);
  }
  //playNote();
=======


function updateNote(){
    if (gameState.chord[gameState.currentNote].accidental == 'flat'){
        //change note's sound (need to change the way note's sound if change, see below)
        gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(gameState.chord[gameState.currentNote].flatNote);

        //BELOW:
        /*gameState.chord[gameState.currentNote].sound = gameState.scene.sound.add(chord.notes[gameState.currentNote.name].flat);
        */

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
>>>>>>> 2aa625e86e36f93bebb9df105f3ae56d603a80e9
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  //-1 indicates flat, 0 indicates natural, 1 indicates sharp
}

function randomizeAccidental(position) {
  let value = getRandomIntInclusive(-1, 1);
  let note = gameState.chord[position];

  if (value == -1) {
    note.accidental = "flat";
    note.sound = gameState.scene.sound.add(notes[note.name].flat);
  } else if (value == 0) {
    note.accidental = "natural";
    note.sound = gameState.scene.sound.add(note.name);
  } else {
    note.accidental = "sharp";
    note.sound = gameState.scene.sound.add(notes[note.name].sharp);
  }
}

function setFirstAccidental() {
  let chord = gameState.chord;
  let first = chord.first;
  if (majorChords[chord.name].firstAccidental != undefined) {
    first.accidental = majorChords[chord.name].firstAccidental;
    first.sound = gameState.scene.sound.add(
      notes[first.name][first.accidental]
    );
  } else {
    first.accidental = "natural";
    first.sound = gameState.scene.sound.add(first.name);
  }
}

/**
 *  Cycles through accidentals of the current note.
 *
 *  Changes accidental based on its current value.
 *  If it's currently flat, it becomes natural.
 *  If it's currently natural, it becomes sharp.
 *  If it's currently sharp, if becomes flat.
 *
 *  @return {null} Doesn't return a value
 */
function changeAccidental() {
  let note = gameState.chord[gameState.currentNote];

  if (note.accidental == "flat") {
    note.accidental = "natural";
    note.sound = gameState.scene.sound.add(note.name);
  } else if (note.accidental == "natural") {
    note.accidental = "sharp";
    note.sound = gameState.scene.sound.add(notes[note.name].sharp);
  } else {
    note.accidental = "flat";
    note.sound = gameState.scene.sound.add(notes[note.name].flat);
  }

  note.sound.play();
}

function noteLeft() {
  if (gameState.currentNote == "first") {
    gameState.currentNote = "seventh";
    playNote();
  } else if (gameState.currentNote == "third") {
    gameState.currentNote = "first";
    playChord();
  } else if (gameState.currentNote == "fifth") {
    gameState.currentNote = "third";
    playNote();
  } else {
    gameState.currentNote = "fifth";
    playNote();
  }
}

function noteRight() {
  if (gameState.currentNote == "seventh") {
    gameState.currentNote = "first";
    playChord();
  } else if (gameState.currentNote == "third") {
    gameState.currentNote = "fifth";
    playNote();
  } else if (gameState.currentNote == "fifth") {
    gameState.currentNote = "seventh";
    playNote();
  } else {
    gameState.currentNote = "third";
    playNote();
  }
}

function playNote() {
  gameState.chord[gameState.currentNote].sound.play();
}

function playChord() {
  gameState.chord.first.sound.play();

  setTimeout(function() {
    gameState.chord.third.sound.play();
  }, 250);

  setTimeout(function() {
    gameState.chord.fifth.sound.play();
  }, 500);

  setTimeout(function() {
    gameState.chord.seventh.sound.play();
  }, 750);

  setTimeout(function() {
    gameState.chord.first.sound.play();
    gameState.chord.third.sound.play();
    gameState.chord.fifth.sound.play();
    gameState.chord.seventh.sound.play();
  }, 1250);

  //comment
}

/*
 *  isCorrect()
 * switchAccidental()
 * playNote()
 * newChord()
 */
