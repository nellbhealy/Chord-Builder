let gameState = {
  scene: {
    load: {},
  },
  currentNote: "first",
  chord: {
    name: "",
    first: {
      name: "",
      image: "",
      sound: "",
      accidental: "",
      accidentalImage: "",
    },
    third: {
      name: "",
      image: "",
      sound: "",
      accidental: "",
      accidentalImage: "",
    },
    fifth: {
      name: "",
      image: "",
      sound: "",
      accidental: "",
      accidentalImage: "",
    },
    seventh: {
      name: "",
      image: "",
      sound: "",
      accidental: "",
      accidentalImage: "",
    },
  },
};

const y_values = {
  g3: 550,
  a3: 515,
  b3: 480,
  c4: 445,
  d4: 410,
  e4: 375,
  f4: 340,
  g4: 305,
  a4: 270,
  b4: 235,
  c5: 201,
  d5: 165,
  e5: 134,
  f5: 95,
  g5: 60,
};

const x_values = {
  first: 300,
  third: 450,
  fifth: 600,
  seventh: 750,
};

function getNewMinorChord() {
  gameState.type = "minor";
  //get unplayed minor chords
  let chords_remaining = Object.keys(minorChords).filter(
    (key) => !(key in gameState.completed.minor)
  );

  if (chords_remaining.length > 0) {
    let index = Math.floor(Math.random() * chords_remaining.length);
    gameState.completed.minor[chords_remaining[index]] = true;
    return chords_remaining[index];
  } else {
    return null;
  }
}

function getNewMajorChord() {
  //get the major chords that haven't been played
  let chords_remaining = Object.keys(majorChords).filter(
    (key) => !(key in gameState.completed.major)
  );

  if (chords_remaining.length > 0) {
    let index = Math.floor(Math.random() * chords_remaining.length);
    gameState.completed.major[chords_remaining[index]] = true;
    return chords_remaining[index];
  } else {
    return getNewMinorChord();
  }
}

function getNewChord() {
  if (gameState.type == "major") return getNewMajorChord();
  else return getNewMinorChord();
}
