
class Player {
  constructor() {
    this.sprite = createSprite(100, height / 2, 40, 30);
    this.sprite.addImage(planeImage); // Use the plane image
    this.sprite.scale = 0.2; // Resize if needed
  }

  update() {
    if (keyIsDown(UP_ARROW)) this.sprite.position.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.sprite.position.y += 5;
    if (keyIsDown(LEFT_ARROW)) this.sprite.position.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.sprite.position.x += 5;
  }

  display() {
    drawSprite(this.sprite);
  }

  shoot(bulletsArray) {
    let bullet = new Bullet(this.sprite.position.x + 30, this.sprite.position.y);
    bulletsArray.push(bullet);
    // if (laserSound) laserSound.play(); // optional sound
  }
}

