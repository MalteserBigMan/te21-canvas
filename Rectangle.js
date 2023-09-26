export default class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.speed = 7
    this.speedy = 7
    this.width = width
    this.height = height
    this.color = color
  }

  update(canvas) {
    if (this.x + this.width >= canvas.width || this.x <= 0) {
      this.speed *= -1
    }
    this.x += this.speed
    if (this.y + this.height >= canvas.height || this.y <= 0) {
      this.speedy *= -1
    }
    this.y += this.speedy
  }



  draw(context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}
