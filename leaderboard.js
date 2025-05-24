let leaderboardData = [];

class LeaderboardScene {
  constructor() {
    this.button = createButton("Back to Menu");
    this.button.position((windowWidth - 150) / 2, height - 100);
    this.button.class("menu-button");
    this.button.mousePressed(() => {
      this.button.remove();
      currentScene = new MenuScene();
    });

    this.loadScores();
  }

  loadScores() {
    loadJSON("./assets/scores.json", (data) => {
      leaderboardData = data.sort((a, b) => b.score - a.score); // sort high to low
    });
  }

  draw() {
    background(20);
    fill(255);
    textAlign(CENTER);
    textSize(36);
    text("Leaderboard", width / 2, 50);

    textSize(24);
    for (let i = 0; i < leaderboardData.length; i++) {
      let entry = leaderboardData[i];
      text(`${i + 1}. ${entry.name} - ${entry.score}`, width / 2, 120 + i * 40);
    }
  }

  keyPressed() {
    // Optional: press "M" to go to menu
    if (key === 'm' || key === 'M') {
      this.button.remove();
      currentScene = new MenuScene();
    }
  }
}
