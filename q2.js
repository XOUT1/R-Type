let menuVideo;

class MenuScene {
  constructor() {
    menuVideo = createVideo('./assets/into.mp4');
    menuVideo.size(width, height);
    menuVideo.volume(0);      
    menuVideo.loop();
    menuVideo.hide();

    // Start Game Button
    this.button = createButton('Start Game');
    this.button.position((windowWidth - 150) / 2, (windowHeight - 50) / 2);
    this.button.class('menu-button');
    this.button.mousePressed(() => {
      this.button.remove();
      this.leaderboardButton.remove(); // remove both buttons
      currentScene = new GameScene();
    });

    //  Leaderboard Button
    this.leaderboardButton = createButton('Leaderboard');
    this.leaderboardButton.position((windowWidth - 150) / 2, (windowHeight - 50) / 2 + 60);
    this.leaderboardButton.class('leaderboard-button');
    this.leaderboardButton.mousePressed(() => {
      this.button.remove(); // remove both buttons
      this.leaderboardButton.remove();
      currentScene = new LeaderboardScene();
    });
  }

  draw() {
    background(0);
    if (menuVideo) {
      image(menuVideo, 0, 0, width, height);
    }

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Main Menu", width / 2, height / 4);
  }

  cleanup() {
    this.button.remove();
    this.leaderboardButton.remove();
    if (menuVideo) {
      menuVideo.stop();
      menuVideo.remove();
    }
  }
}
