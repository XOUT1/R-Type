

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