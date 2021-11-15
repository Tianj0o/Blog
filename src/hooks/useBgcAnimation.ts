const canvas: HTMLCanvasElement = document.querySelector(
  "#canvas"
) as HTMLCanvasElement;
let height = window.innerHeight;
let width = window.innerWidth;
canvas.height = height;
canvas.width = width;
const ctx: CanvasRenderingContext2D = canvas.getContext(
  "2d"
) as CanvasRenderingContext2D;
class Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  constructor(
    x: number,
    y: number,
    vx: number,
    vy: number,
    radius: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  move() {
    this.draw();
    this.x += this.vx;
    this.y += this.vy;
    //碰墙检测
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }
  drawLine(otherBall: Ball) {
    const r = Math.sqrt(
      (this.x - otherBall.x) ** 2 + (this.y - otherBall.y) ** 2
    );
    if (r <= 120) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(otherBall.x, otherBall.y);
      ctx.strokeStyle = `rgba(0,0,0,${0.6 - r / 120})`;
      ctx.stroke();
      ctx.closePath();
    }
  }
}
function newBall() {
  const vRandom = Math.random() * 2 - 1;
  const xRandom = Math.random() * width * 0.9 + 20;
  const yRandom = Math.random() * height * 0.9 + 20;
  const rRandom = Math.random();
  const ball: Ball = new Ball(
    xRandom,
    yRandom,
    vRandom,
    vRandom,
    rRandom,
    "black"
  );
  return ball;
}
const balls: Ball[] = [];
function start() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
    for (let j = 0; j < balls.length; j++) {
      if (j !== i) {
        balls[i].drawLine(balls[j]);
      }
    }
  }
}
function loop() {
  ctx.clearRect(0, 0, width, height);
  start();
  window.requestAnimationFrame(loop);
}
function init(): void {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 50; i++) {
    balls.push(newBall());
  }
  loop();
  window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;
  });
}

export default init;
