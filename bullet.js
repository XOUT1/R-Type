class Bullet {
  constructor(x, y) {
    this.sprite = createSprite(x, y, 10, 4);
    this.sprite.shapeColor = color(255, 0, 0); // red bullet
    this.sprite.velocity.x = 10;
  }

  isOffScreen() {
    return this.sprite.position.x > width;
  }

  destroy() {
    this.sprite.remove();
  }
}
