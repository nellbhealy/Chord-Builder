let gameState = {
    scene: {
        load: {}

    },
    currentNote: "first",
    chord: {
        name: "",
        first: {
            name: "",
            image: "",
            sound: "",
            accidental: "",
            accidentalImage: ""
        },
        third: {
            name: "",
            image: "",
            sound: "",
            accidental: "",
            accidentalImage: ""
        },
        fifth: {
            name: "",
            image: "",
            sound: "",
            accidental: "",
            accidentalImage: ""
        },
        seventh: {
            name: "",
            image: "",
            sound: "",
            accidental: "",
            accidentalImage: ""
        }
    }
};

const y_values = {
    a3: 480,
    b3: 445,
    c4: 410,
    e4: 375, 
    f4: 340, 
    g4: 305, 
    a4: 270,
    b4: 235,
    c5: 201,
    d5: 165,
    e5: 130,
    f5: 95
};

const x_values = {
    one: 300,
    two: 450,
    three: 600,
    four: 750
};