let loadImages = function() {
  gameState.scene.load.image("note-black", "assets/note-black.png");
  gameState.scene.load.image("black-flat", "assets/black-flat.png");
  gameState.scene.load.image("black-sharp", "assets/black-sharp.png");
};

function loadAudio() {
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
  gameState.scene.load.audio("g4", "assets/notes trimmed/G1.mp3");
  gameState.scene.load.audio("gb4", "assets/notes trimmed/Gb1.mp3");
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
    .sprite(x_values[position], y_values[note.name], "note-black")
    .setScale(0.85);

  //create image for flat accidental so that updateNote can update setVisible
  note.accidentalImage = gameState.scene.physics.add.sprite(0, 0, "black-flat");

  if (position != "first") randomizeAccidental(position);
  else setFirstAccidental();

  updateNote();
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

//I'm not sure what this was supposed to be used for, but it isn't called anywhere?
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
/**
 *  Updates the currentNote after the accidental changes.
 *
 *  Changes the image and sound for the note.
 *
 */
function updateNote() {
  let note = gameState.chord[gameState.currentNote];
  const x_offset_sharp = 55,
    x_offset_flat = 45,
    y_offset_sharp = 23,
    y_offset_flat = 21,
    scale = 0.35;

  note.accidentalImage.setVisible(false);

  if (note.accidental == "flat") {
    //change note's sound (need to change the way note's sound if change, see below)
    note.sound = gameState.scene.sound.add(notes[note.name].flat);
    //make accidental sprite visible and change note's accidental image
    note.accidentalImage = gameState.scene.physics.add
      .sprite(
        x_values[gameState.currentNote] - x_offset_flat,
        y_values[note.name] - y_offset_flat,
        "black-flat"
      )
      .setScale(scale);
    note.accidentalImage.setVisible(true);
  } else if (note.accidental == "natural") {
    note.sound = gameState.scene.sound.add(note.name);
  } else if (note.accidental == "sharp") {
    note.sound = gameState.scene.sound.add(notes[note.name].sharp);
    //make accidental sprite visible and change note's accidental image
    note.accidentalImage = gameState.scene.physics.add
      .sprite(
        x_values[gameState.currentNote] - x_offset_sharp,
        y_values[note.name] - y_offset_sharp,
        "black-sharp"
      )
      .setScale(scale);
    note.accidentalImage.setVisible(true);
  }
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
 *  Cycles through accidentals of the current note, unless it's the root.
 *
 *  Changes accidental based on its current value.
 *  If it's currently flat, it becomes natural.
 *  If it's currently natural, it becomes sharp.
 *  If it's currently sharp, if becomes flat.
 *
 *  @return {null}
 */
function changeAccidental() {
  if (gameState.currentNote == "first") return;

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

  updateNote();
  note.sound.play();
}

/**
 *  Moves selected note to the left, then plays the note.
 *
 *  first -> seventh
 *  third -> first
 *  fifth -> third
 *  seventh -> third.
 *
 *  @return {null}
 */
function noteLeft() {
  switch (gameState.currentNote) {
    case "first":
      gameState.currentNote = "seventh";
      break;
    case "third":
      gameState.currentNote = "first";
      break;
    case "fifth":
      gameState.currentNote = "third";
      break;
    case "seventh":
      gameState.currentNote = "fifth";
  }
  playNote();
}

/**
 *  Moves selected note to the right, then plays the note.
 *
 *  first -> seventh
 *  third -> first
 *  fifth -> third
 *  seventh -> third.
 *
 *  @return {null}
 */
function noteRight() {
  switch (gameState.currentNote) {
    case "first":
      gameState.currentNote = "third";
      break;
    case "third":
      gameState.currentNote = "fifth";
      break;
    case "fifth":
      gameState.currentNote = "seventh";
      break;
    case "seventh":
      gameState.currentNote = "first";
      break;
  }
  playNote();
}

function playNote() {
  if (gameState.currentNote != "first") {
    gameState.chord[gameState.currentNote].sound.play();
  } else {
    playChord();
  }
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
}
