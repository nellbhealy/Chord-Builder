let majorChords = {
    c4: {
        first : 'c4',
        third : 'e4',
        fifth : 'g4',
        seventh : 'c5'
    },

    db4 : {
        first : 'd4',
        firstAccidental : 'flat',
        third : 'f4',
        fifth : 'a4',
        fifthAccidental : 'flat',
        seventh : 'd5',
        seventhAccidental : 'flat'
    },

    d4 : {
        first : 'd4',
        third : 'f4',
        thirdAccidental : 'sharp',
        fifth : 'a4',
        seventh : 'd5',
    },

    eb4 : {
        first : 'e4',
        firstAccidental : 'flat',
        third : 'g4',
        fifth : 'b4',
        fifthAccidental : 'flat',
        seventh : 'e5',
        seventhAccidental : 'flat'
    },

    f4 : {
        first : 'f4',
        third : 'a4',
        fifth : 'c5', 
        seventh : 'f5'
    },

    g4 : {
        first : 'g4',
        third : 'b4', 
        fifth : 'd5',
        seventh : 'g5'
    },

    gb4 : {
        first : 'g4',
        firstAccidental : 'flat',
        third : 'b4',
        thirdAccidental : 'flat',
        fifth : 'd5',
        fifthAccidental : 'flat',
        seventh : 'g5',
        seventhAccidental : 'flat'
    }, 

    ab3 : {
        first : 'a3',
        firstAccidental : 'flat',
        third : 'c4',
        fifth : 'e4',
        fifthAccidental : 'flat',
        seventh : 'a4',
        seventhAccidental : 'flat'
    },

    bb4 : {
        first : 'b3',
        firstAccidental : 'flat',
        third : 'd4',
        fifth : 'f4',
        seventh : 'b4',
        seventhAccidental : 'flat'
    }
};


let minorChords = {
    a3 : { 
        first : 'a3',
        third : 'c4',
        fifth : 'e4',
        seventh : 'a4'
    },

    g4 : {
        first : 'g3',
        third : 'b4',
        thirdAccidental : 'flat',
        fifth : 'd4',
        seventh : 'g4'
    }, 

    bb3 : {
        first : 'b3',
        firstAccidental : 'flat',
        third : 'd4',
        thirdAccidental : 'flat',
        fifth : 'f4',
        seventh : 'b4',
        seventhAccidental : 'flat'
    },

    c4 : {
        first : 'c4',
        third : 'e4',
        thirdAccidental : 'flat',
        fifth : 'g4',
        seventh : 'c5'
    },

    d4 : {
        first : 'd4',
        third : 'f4',
        fifth : 'a4',
        seventh : 'd5'
    },

    f4 : {
        first : 'f4',
        third : 'a4',
        thirdAccidental : 'flat',
        fifth : 'c5',
        seventh : 'f5',
    }

};


//do we have the audio for the note g?? am i blind?

let notes = {
    a3 : {
        flat : 'ab3',
        sharp : 'bb3'
    },

    a4 : {
        flat : 'ab4',
        sharp : 'bb4'
    },

    b3 : {
        flat : 'bb3',
        sharp : 'cb3'
    },

    b4 : {
        flat : 'bb4',
        sharp : 'cb4'
    }, 

    b5 : {
        flat : 'bb5',
        sharp : 'cb5'
    }, 

    c4 : {
        flat : 'cb4',
        sharp : 'db4'
    }, 

    c5 : {
        flat : 'cb5',
        sharp : 'db5'
    },

    d4 : {
        flat : 'db4', 
        sharp : 'eb4'
    }, 

    d5 : {
        flat : 'db5',
        sharp : 'eb5'
    }, 

    e4 : {
        flat : 'eb4',
        //theres no e# ??? it's just an f??
    },

    e5 : {
        flat : 'eb5'
        //once again, e# is just an f sooo?
    },

    f4 : {
        //no flat - same scenario?
        sharp : 'gb4'
    },

    f5 : {
        //no flat again
        sharp : 'gb5'
    },

    g4 : {
        flat : 'gb4',
        sharp : 'ab4'
    },
     
    g5 : {
        flat : 'gb5',
        sharp : 'ab5'
    }
};


let isCorrect = () => {
    // gameState.chord;
};