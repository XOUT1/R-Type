class Enemy {
  constructor() {
    this.sprite = createSprite(width + 20, random(50, height - 50), 30, 30);
    this.sprite.shapeColor = color(255, 0, 255);
    this.sprite.velocity.x = -4;
  }

  isOffScreen() {
    return this.sprite.position.x < -20;
  }

  destroy() {
    this.sprite.remove();
  }
}