/*
 *  Preloads images into phaser scene for later use
 *
 *  @return {null}
 */
function loadImages() {
  gameState.scene.load.image("note-black", "assets/note-black.png");
  gameState.scene.load.image("black-flat", "assets/black-flat.png");
  gameState.scene.load.image("black-sharp", "assets/black-sharp.png");
  gameState.scene.load.image("note-blue", "assets/note-blue.png");
  gameState.scene.load.image("black-line", "assets/black-line.png");
}

/**
 *  Preloads all of the audio files into phaser scene for later use.
 *
 *  TODO: Update so that only the needed audio files are loaded.
 *
 *  @return {null}
 */
function loadAudio() {
  gameState.scene.load.audio("a3", "assets/notes trimmed/A3.mp3");
  gameState.scene.load.audio("a4", "assets/notes trimmed/A4.mp3");
  gameState.scene.load.audio("ab3", "assets/notes trimmed/Ab3.mp3");
  gameState.scene.load.audio("ab4", "assets/notes trimmed/Ab4.mp3");
  gameState.scene.load.audio("ab5", "assets/notes trimmed/Ab5.mp3");
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
  gameState.scene.load.audio("e5", "assets/notes trimmed/E5.mp3");
  gameState.scene.load.audio("eb5", "assets/notes trimmed/Eb5.mp3");
  gameState.scene.load.audio("f4", "assets/notes trimmed/F4.mp3");
  gameState.scene.load.audio("f5", "assets/notes trimmed/F5.mp3");
  gameState.scene.load.audio("g3", "assets/notes trimmed/G3.mp3");
  gameState.scene.load.audio("g4", "assets/notes trimmed/G4.mp3");
  gameState.scene.load.audio("gb4", "assets/notes trimmed/Gb4.mp3");
  gameState.scene.load.audio("g5", "assets/notes trimmed/G5.mp3");
  gameState.scene.load.audio("gb3", "assets/notes trimmed/Gb3.mp3");
  gameState.scene.load.audio("gb5", "assets/notes trimmed/Gb5.mp3");
  gameState.scene.load.audio("correct", "assets/correct.mp3");
  gameState.scene.load.audio("incorrect", "assets/incorrect.mp3");
}

/**
 * Adds lines to scene for any note above or below the staff
 *
 * @param {Number} position
 */
function addLinesToStaff(position) {
  //let addSprite = gameState.scene.physics.add.sprite;
  let key = "black-line";
  let x = x_values[position];
  let y_offset = 5;
  switch (gameState.chord[position].name) {
    case "g3":
    case "a3":
      gameState.lines.push[
        gameState.scene.physics.add
          .sprite(x, y_values["a3"] + y_offset, key)
          .setScale(0.65)
      ];
    case "b3":
    case "c4":
      gameState.lines.push[
        gameState.scene.physics.add
          .sprite(x, y_values["c4"] + y_offset, key)
          .setScale(0.65)
      ];
  }
}

/**
 * Creates a note at the given position.
 *
 * Overwrites any note that was at the given position,
 * adds image and sound properties and randomizes accidental.
 *
 * @see updateNote
 * @see randomizeAccidental
 * @see setFirstAccidental
 *
 * @param {String} position
 */
function createNote(position) {
  gameState.currentNote = position;
  gameState.chord[position] = {};

  //use local variable for increased readability
  let note = gameState.chord[position];
  let key = position == "first" ? "note-blue" : "note-black";

  //set note's name
  note.name = majorChords[gameState.chord.name][position];

  //add note's image to screen
  note.image = gameState.scene.physics.add
    .sprite(x_values[position], y_values[note.name], key)
    .setScale(0.85);
  addLinesToStaff(position);

  //create image for flat accidental so that updateNote can update setVisible
  note.accidentalImage = gameState.scene.physics.add.sprite(0, 0, "black-flat");

  if (position != "first") randomizeAccidental(position);
  else setFirstAccidental();

  updateNote();
}

/**
 * Creates a chord of the given name
 *
 * Creates chord property of gameState,
 * calls createNote for all notes in the chord.
 *
 * @see createNote
 *
 * @param {String} chord_name Name of the chord.
 */
function createChord(chord_name) {
  //create chord object inside of gameState
  gameState.chord = {};
  gameState.lines = []; //used for images of extra lines
  gameState.chord.name = chord_name;
  gameState.chord.playing = false;

  //create notes
  createNote("first");
  createNote("third");
  createNote("fifth");
  createNote("seventh");

  //set current note back to first for gameplay
  gameState.currentNote = "first";
}

/**
 * Updates the currentNote after the accidental changes.
 *
 * Changes the image and sound for the note.
 *
 * @return {null}
 */
function updateNote() {
  let note = gameState.chord[gameState.currentNote];
  note.accidentalImage.destroy();
  let note_name, x_offset, y_offset, key;
  const x_offset_sharp = 55,
    x_offset_flat = 45,
    y_offset_sharp = 23,
    y_offset_flat = 21,
    scale = 0.35;

  switch (note.accidental) {
    case "natural":
      note.sound = gameState.scene.sound.add(note.name);
      return;
    case "flat":
      note_name = notes[note.name].flat;
      x_offset = x_offset_flat;
      y_offset = y_offset_flat;
      key = "black-flat";
      break;
    case "sharp":
      note_name = notes[note.name].sharp;
      x_offset = x_offset_sharp;
      y_offset = y_offset_sharp;
      key = "black-sharp";
  }

  note.sound = gameState.scene.sound.add(note_name);

  //make accidental image and make it visible
  note.accidentalImage = gameState.scene.physics.add
    .sprite(
      x_values[gameState.currentNote] - x_offset,
      y_values[note.name] - y_offset,
      key
    )
    .setScale(scale);
  note.accidentalImage.setVisible(true);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  //-1 indicates flat, 0 indicates natural, 1 indicates sharp
}

/**
 * Randomizes the accidental on a note when it's created.
 *
 * Randomizes the accidental and calls updateNote.
 *
 * @see updateNote
 *
 * @param {String} position
 */
function randomizeAccidental(position) {
  let note = gameState.chord[position];

  switch (getRandomIntInclusive(-1, 1)) {
    case -1:
      note.accidental = "flat";
      break;
    case 0:
      note.accidental = "natural";
      break;
    case 1:
      note.accidental = "sharp";
      break;
  }

  updateNote();
}

/**
 * Sets the value of gameState.chord.first.accidental
 *
 * Then calls updateNote
 *
 * @see updateNote
 *
 * @return {null}
 */
function setFirstAccidental() {
  let correct_chord = majorChords[gameState.chord.name];
  let first = gameState.chord.first;

  first.accidental =
    correct_chord.firstAccidental != undefined
      ? correct_chord.firstAccidental
      : "natural";

  updateNote();
}

/**
 * Cycles through accidentals of the current note, unless it's the root.
 *
 * Changes accidental based on its current value.
 * If it's currently flat, it becomes natural.
 * If it's currently natural, it becomes sharp.
 * If it's currently sharp, if becomes flat.
 *
 * @return {null}
 */
function changeAccidental() {
  if (gameState.currentNote == "first") return;

  let note = gameState.chord[gameState.currentNote];

  switch (note.accidental) {
    case "flat":
      note.accidental = "natural";
      break;
    case "natural":
      note.accidental = "sharp";
      break;
    case "sharp":
      note.accidental = "flat";
      break;
  }

  updateNote();
  note.sound.play();
}

/**
 * Moves selected note to the left, then plays the note.
 *
 * first -> seventh
 * third -> first
 * fifth -> third
 * seventh -> third.
 *
 * @see playNote
 *
 * @return {null}
 */
function noteLeft() {
  switch (gameState.currentNote) {
    case "first":
      gameState.currentNote = "seventh";
      currentNoteColorChange("first", "seventh");
      break;
    case "third":
      gameState.currentNote = "first";
      currentNoteColorChange("third", "first");
      break;
    case "fifth":
      gameState.currentNote = "third";
      currentNoteColorChange("fifth", "third");
      break;
    case "seventh":
      gameState.currentNote = "fifth";
      currentNoteColorChange("seventh", "fifth");
  }
  playNote();
}

/**
 * Moves selected note to the right, then plays the note.
 *
 * first -> seventh
 * third -> first
 * fifth -> third
 * seventh -> third.
 *
 * @see playNote
 *
 * @return {null}
 */
function noteRight() {
  switch (gameState.currentNote) {
    case "first":
      gameState.currentNote = "third";
      currentNoteColorChange("first", "third");
      break;
    case "third":
      gameState.currentNote = "fifth";
      currentNoteColorChange("third", "fifth");
      break;
    case "fifth":
      gameState.currentNote = "seventh";
      currentNoteColorChange("fifth", "seventh");
      break;
    case "seventh":
      gameState.currentNote = "first";
      currentNoteColorChange("seventh", "first");
      break;
  }
  playNote();
}

/**
 * Changes the color of the current note to blue as a visual indication of the current note.
 */

function currentNoteColorChange(position_prev, position_current) {
  let note_prev = gameState.chord[position_prev];
  let note_current = gameState.chord[position_current];

  note_prev.image.destroy();
  note_current.image.destroy();

  note_prev.image = gameState.scene.physics.add
    .sprite(x_values[position_prev], y_values[note_prev.name], "note-black")
    .setScale(0.85);

  note_current.image = gameState.scene.physics.add
    .sprite(
      x_values[position_current],
      y_values[note_current.name],
      "note-blue"
    )
    .setScale(0.85);
}

/**
 * Plays the currently selected note.
 *
 * Plays the currently selected note,
 * unless the root note is selected,
 * then it plays the whole chord.
 *
 * @see playChord
 *
 * @return {null}
 */
function playNote() {
  //Don't play anything if the chord is already playing
  if (gameState.chord.playing) return;

  if (gameState.currentNote != "first") {
    gameState.chord[gameState.currentNote].sound.play();
  } else {
    playChord();
  }
}

/**
 * Plays the current chord.
 *
 * Plays the notes individualy first, then all together.
 *
 * @return {null}
 */
function playChord() {
  gameState.chord.first.sound.play();
  gameState.chord.playing = true;

  setTimeout(function () {
    gameState.chord.third.sound.play();
  }, 250);

  setTimeout(function () {
    gameState.chord.fifth.sound.play();
  }, 500);

  setTimeout(function () {
    gameState.chord.seventh.sound.play();
  }, 750);

  setTimeout(function () {
    gameState.chord.first.sound.play();
    gameState.chord.third.sound.play();
    gameState.chord.fifth.sound.play();
    gameState.chord.seventh.sound.play();
  }, 1250);

  setTimeout(function () {
    gameState.chord.playing = false;
  }, 2000);


}

/**
 * Clears the current chord and associated content.
 *
 * Deletes notes, accidentals, and sound.
 *
 * @return {null}
 */
function clearChord() {
  gameState.chord.first.sound.destroy();
  gameState.chord.third.sound.destroy();
  gameState.chord.fifth.sound.destroy();
  gameState.chord.seventh.sound.destroy();

  gameState.chord.first.image.destroy();
  gameState.chord.third.image.destroy();
  gameState.chord.fifth.image.destroy();
  gameState.chord.seventh.image.destroy();

  if (gameState.chord.first.accidentalImage) {
    gameState.chord.first.accidentalImage.destroy();
  }
  if (gameState.chord.third.accidentalImage) {
    gameState.chord.third.accidentalImage.destroy();
  }
  if (gameState.chord.fifth.accidentalImage) {
    gameState.chord.fifth.accidentalImage.destroy();
  }
  if (gameState.chord.seventh.accidentalImage) {
    gameState.chord.seventh.accidentalImage.destroy();
  }
}

/**
 * Checks for correctness by comparing, note by note, gameState's chord to the chord as specified in chord.js
 */
function isCorrect(){
  
  //third accidental of correct chord is natural
  if (majorChords[gameState.chord.name].thirdAccidental==undefined){
    if(gameState.chord.third.accidental!='natural'){
      return false;
    }
  } else {
    //third accidental of correct chord is not natural
    if (majorChords[gameState.chord.name].thirdAccidental != gameState.chord.third.accidental){
      return false;
    }
  }
  
  //fifth accidental of correct chord is natural
  if (majorChords[gameState.chord.name].fifthAccidental==undefined){
    if(gameState.chord.fifth.accidental!='natural'){
      return false;
    }
  } else {
    //fifth accidental of correct chord is not natural
    if (majorChords[gameState.chord.name].fifthAccidental != gameState.chord.fifth.accidental){
      return false;
    }
  }

  //seventh accidental of correct chord is natural
  if (majorChords[gameState.chord.name].seventhAccidental==undefined){
    if(gameState.chord.seventh.accidental!='natural'){
      return false;
    }
  } else {
    //seventh accidental of correct chord is not natural
    if (majorChords[gameState.chord.name].seventhAccidental != gameState.chord.seventh.accidental){
      return false;
    }
  }

  return true;

}

/**
 * Called when isCorrect() returns true. A chime is played to indicate correctness.
 */
function playCorrectSound(){
  let correctChime = gameState.scene.sound.add('correct');
  //timeout of 2500 so that chord can finish playing before chime is played
  setTimeout(function () {
    correctChime.play();
  }, 2500);
  
}

