class SceneTemplate extends Phaser.Scene {
  constructor() {
    super({ key: "SceneTemplate" });
  }

  preload() {
    //add scene to gameState for universal reference
    gameState.scene = this;
    this.load.image("staff", "./assets/staff.png");

    loadImages();

    loadAudio();
  }

  create() {
    //add background image
    this.add.image(0, 0, "staff").setOrigin(0).setScale(1);

    //create the chord
    gameState.completed = {};
    gameState.completed.major = {};
    gameState.completed.minor = {};
    gameState.completed.diminished = {};
    gameState.type = "major";
    createChord(getNewChord());

    // wait a second, then ->
    // add event listeners and call appropriate functions
    let addListeners = function (scene) {
      scene.input.keyboard.on("keyup-SPACE", function (event) {
        changeAccidental();
      });

      scene.input.keyboard.on("keyup-LEFT", function (event) {
        noteLeft();
      });

      scene.input.keyboard.on("keyup-RIGHT", function (event) {
        noteRight();
      });

      scene.input.keyboard.on("keyup-ENTER", function (event) {
        playCorrectChord();
      });
    };

    setTimeout(addListeners(this), 1000);
    playChord();
  }

  update() {}
}
