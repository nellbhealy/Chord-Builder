const width = 900;
const height = 600;

const config = {
  width: width,
  height: height,
  backgroundColor: "ffffff",
  scene: [SceneTemplate],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};

let loadScene = () => {
  const game = new Phaser.Game(config);
};

let loaded = false;

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      if (!loaded) {
        loadScene();
        loaded = true;
      }
    }
  },
  false
);
