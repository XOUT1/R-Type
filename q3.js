let gamePlayer;
let gameBgVideo;
let bullets = [];
let enemies = [];
let lastEnemySpawnTime = 0;
let score = 0;

class GameScene {
  constructor() {
    gamePlayer = new Player();
    bullets = [];
    enemies = [];
    score = 0;
    lastEnemySpawnTime = millis();

    gameBgVideo = createVideo('./assets/stars_bg.mp4');
    gameBgVideo.size(width, height);
    gameBgVideo.loop();
    gameBgVideo.volume(0);
    gameBgVideo.hide();

    this.popupText = "";
    this.popupTimer = 0;
  }

  showHitPopup() {
    this.popupText = "Hit! -100";
    this.popupTimer = millis();
  }

  draw() {
    image(gameBgVideo, 0, 0, width, height);

    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text(`Score: ${score}`, 20, 20);

    gamePlayer.update();
    gamePlayer.display();

    if (this.popupText && millis() - this.popupTimer < 1500) {
      fill(255, 0, 0);
      stroke(0);
      strokeWeight(4);
      textSize(36);
      textAlign(CENTER, CENTER);
      text(this.popupText, width / 2, height / 2);
      noStroke();
    }

    // Spawn enemies
    if (millis() - lastEnemySpawnTime > 1500) {
      enemies.push(new Enemy());
      lastEnemySpawnTime = millis();
    }

    // Update and draw bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      drawSprite(bullets[i].sprite);
      if (bullets[i].isOffScreen()) {
        bullets[i].destroy();
        bullets.splice(i, 1);
      }
    }

    // Update and draw enemies + check for collisions
    for (let i = enemies.length - 1; i >= 0; i--) {
      let enemy = enemies[i];
      drawSprite(enemy.sprite);

      // Check enemy hits player
      if (enemy.sprite.overlap(gamePlayer.sprite)) {
        score -= 100;
        this.showHitPopup();
        enemy.destroy();
        enemies.splice(i, 1);
        continue;
      }

      // Check bullet-enemy collisions
      for (let j = bullets.length - 1; j >= 0; j--) {
        if (bullets[j].sprite.overlap(enemy.sprite)) {
          score += 100;

          bullets[j].destroy();
          enemy.destroy();
          bullets.splice(j, 1);
          enemies.splice(i, 1);
          break;
        }
      }

      // Remove enemy if off screen
      if (enemy && enemy.isOffScreen()) {
        enemy.destroy();
        enemies.splice(i, 1);
      }
    }
  }

  keyPressed() {
    if (key === ' ') {
      gamePlayer.shoot(bullets);
    }
  }
}
