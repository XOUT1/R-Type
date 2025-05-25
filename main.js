let planeImage;
let enemyImages = [];



function preload() {
  // Load player image
  planeImage = loadImage('assets/plane.png');

  // Load enemy images
  enemyImages[0] = loadImage('assets/enemy1.png');
  enemyImages[1] = loadImage('assets/enemy2.png');
  enemyImages[2] = loadImage('assets/enemy3.png');

  // load sound
}


let currentScene;

function setup() {
  createCanvas(1200, 600);
  currentScene = new LoadingScene(); // starts with loading
}

function draw() {
  if (currentScene && currentScene.draw) {
    currentScene.draw();
  }
}

function keyPressed() {
  if (currentScene && currentScene.keyPressed) {
    currentScene.keyPressed();
  }
}
