const width = 900;
const height = 500;
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
}

const config = {
    width: width,
    height: height,
    backgroundColor: "ffffff",
    scene: [SceneTemplate],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    }
}

const game = new Phaser.Game(config);