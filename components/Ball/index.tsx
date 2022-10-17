export interface Ball {
  ctx: CanvasRenderingContext2D;
  friction: number;
  gravity: number;
  color: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  dpr: number;
}

//Creating Ball Object to draw and update circles
export class Ball {
  constructor(ctx: CanvasRenderingContext2D, friction: number, gravity: number, x: number, y: number, dx: number, dy: number, radius: number, color: string, dpr: number) {
    this.ctx = ctx;
    this.friction = friction;
    this.gravity = gravity;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.dpr = dpr;
  }

  draw() {
    this.ctx.beginPath();
    // this.ctx.scale(0.9, 0.9);
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    if (this.y + this.radius + this.dy >= innerHeight) {
      this.dy = -this.dy * this.friction;
      this.dx = this.dx * this.friction;
    } else {
      this.dy += this.gravity;
    }
    if (this.x + this.radius + this.dx >= innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx * this.friction;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}