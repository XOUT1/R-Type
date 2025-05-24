let gamePlayer;
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
  }

  draw() {
    background(0);
    this.drawStars(); // optional effect

    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text(`Score: ${score}`, 20, 20);

    gamePlayer.update();
    gamePlayer.display();

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

    // Update and draw enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      drawSprite(enemies[i].sprite);
      if (enemies[i].isOffScreen()) {
        enemies[i].destroy();
        enemies.splice(i, 1);
      }
    }

    // Check bullet-enemy collisions
    for (let i = enemies.length - 1; i >= 0; i--) {
      for (let j = bullets.length - 1; j >= 0; j--) {
        if (bullets[j].sprite.overlap(enemies[i].sprite)) {
        score += 100;

        bullets[j].destroy();
        enemies[i].destroy();
        bullets.splice(j, 1);
        enemies.splice(i, 1);
        break;
        }
      }
    }
  }

  keyPressed() {
    if (key === ' ') {
      gamePlayer.shoot(bullets);
    }
  }

  drawStars() {
    // Simple random starfield
    for (let i = 0; i < 100; i++) {
      stroke(255);
      point(random(width), random(height));
    }
  }
}