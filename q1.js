class LoadingScene {
  constructor() {
    this.startTime = millis();
  }

  draw() {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Loading...", width / 2, height / 2);

    if (millis() - this.startTime > 3000) {
      currentScene = new MenuScene(); // ← Goes to menu
    }
  }
}