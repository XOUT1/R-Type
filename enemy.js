
class Enemy {
  constructor() {
    this.sprite = createSprite(width + 20, random(50, height - 50), 30, 30);
    this.sprite.velocity.x = -4;

    // Safely select a valid image
    let validImages = enemyImages.filter(img => img !== undefined);
    if (validImages.length > 0) {
      let img = random(validImages);
      this.sprite.addImage(img);
      this.sprite.scale = 0.3;
    } else {
      // fallback shape if no image loaded
      this.sprite.shapeColor = color(255, 0, 255); // pink block as fallback
    }
  }

  isOffScreen() {
    return this.sprite.position.x < -20;
  }

  destroy() {
    this.sprite.remove();
  }
}
