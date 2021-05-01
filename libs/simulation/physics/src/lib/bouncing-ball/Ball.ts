import { randomColor } from '@algo-playground/shared/utils';
export const resolveSteps = 5;
export const width = 1080;
export const height = 1080;
// World settings
const gravity = 1.5 / resolveSteps;
const bounce = 0.7;

export default class Ball {
  bounce: number;
  radius: number;
  x: number;
  y: number;
  px: number;
  py: number;
  vy: number;
  vx: number;
  fill: string;
  mass: number;

  constructor({
    x = Math.random() * width,
    y = (Math.random() * height) / 2,
  } = {}) {
    this.radius = 60;
    this.x = x;
    this.y = y;
    this.vy = Math.random() * 10;
    this.vx = Math.random() * 10;
    // Save previous location
    this.px = x - this.vx;
    this.py = y - this.vy;
    this.mass = 1;
    this.fill = randomColor();
  }

  collision(balls: Ball[]) {
    let i = 0;
    let { x, y, vx, vy, px, py } = this;
    const { radius: r, mass: m } = this;
    while (i < balls.length) {
      const b = balls[i++];
      if (this !== b) {
        const rr = r + b.radius;
        if (x + rr > b.x && x < b.x + rr && y + rr > b.y && y < b.y + rr) {
          // Distance between 2 balls
          const dx = x - b.x;
          const dy = y - b.y;
          const d = (dx * dx + dy * dy) ** 0.5;
          // If collision
          if (d < rr) {
            const nx = (b.x - x) / d;
            const ny = (b.y - y) / d;
            const p =
              (2 * ((vx - b.vx) * nx + (vy - b.vy) * ny)) / (m + b.mass);
            const cpx = (x * b.radius + b.x * r) / rr;
            const cpy = (y * b.radius + b.y * r) / rr;
            x = cpx + (r * (x - b.x)) / d;
            y = cpy + (r * (y - b.y)) / d;
            b.x = cpx + (b.radius * (b.x - x)) / d;
            b.y = cpy + (b.radius * (b.y - y)) / d;
            px = x - (vx -= p * b.mass * nx);
            py = y - (vy -= p * b.mass * ny);
            b.px = b.x - (b.vx += p * m * nx);
            b.py = b.y - (b.vy += p * m * ny);
          }
        }
      }
    }
    this.x = x;
    this.y = y;
    this.px = px;
    this.py = py;
    this.vx = vx;
    this.vy = vy;
    this.checkWall();
  }

  checkWall() {
    const top = this.radius;
    const left = this.radius;
    const bottom = height - this.radius;
    const right = width - this.radius;
    if (this.x > right) {
      const away = (this.x - right) * bounce;
      this.x = right - away;
      this.vx = -Math.abs(this.vx) * bounce;
      this.px = this.x - this.vx;
    } else if (this.x < left) {
      const away = (this.x - left) * bounce;
      this.x = left + away;
      this.vx = Math.abs(this.vx) * bounce;
      this.px = this.x - this.vx;
    }
    if (this.y > bottom) {
      const away = (this.y - bottom) * bounce;
      this.y = bottom - away;
      this.vy = -Math.abs(this.vy) * bounce;
      this.py = this.y - this.vy;
    } else if (this.y < top) {
      const away = (this.y - top) * bounce;
      this.y = top + away;
      this.vy = Math.abs(this.vy) * bounce;
      this.py = this.y - this.vy;
    }
  }

  move() {
    this.vx = this.x - this.px;
    this.vy = this.y - this.py;
    this.vy += gravity;
    this.px = this.x;
    this.py = this.y;
    this.x += this.vx;
    this.y += this.vy;

    this.checkWall();
  }
}
