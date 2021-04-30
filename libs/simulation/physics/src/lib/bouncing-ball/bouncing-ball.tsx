import React, { MouseEventHandler, useEffect, useState } from 'react';
import './bouncing-ball.module.css';

// World settings
const gravity = 1.5;
const bounce = 0.7;
const width = 1080;
const height = 1080;

class Ball {
  bounce: number;
  radius: number;
  x: number;
  y: number;
  vy: number;
  vx: number;
  fill: string;
  active: boolean;

  constructor(x = Math.random() * width, y = (Math.random() * height) / 2) {
    this.radius = 60;
    this.x = x;
    this.y = y;
    this.vy = 1;
    this.vx = 1;
    this.fill = randomColor();
    this.active = true;
  }

  collision(balls: Ball[]) {
    balls.forEach((ball) => {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const d = (dx ** 2 + dy ** 2) ** 0.5;
        const rr = this.radius + ball.radius;

        if (d < rr) {
          const angle = Math.atan2(dy, dx);
          const spread = rr - d;
          const ax = spread * Math.cos(angle);
          const ay = spread * Math.sin(angle);

          this.x -= ax;
          this.y -= ay;

          this.vx *= -bounce;
          this.vy *= -bounce;
          ball.vx *= -bounce;
          ball.vy *= -bounce;
        }
      }
    });
  }

  checkWall() {
    // Left boundary
    const leftBorder = 0 + this.radius;
    if (this.x < leftBorder) {
      this.x += bounce * (leftBorder - this.x);
      this.vx *= -bounce;
    }

    // Right boundary
    const rightBorder = width - this.radius;
    if (this.x > rightBorder) {
      this.x -= bounce * (this.x - rightBorder);
      this.vx *= -bounce;
    }

    // Bottom boundary
    if (this.y + this.radius > height) {
      this.y -= bounce * (this.y - (height - this.radius));
      this.vy *= -bounce;

      const h = this.y - (height - this.radius);
      // Prevent ball from shaking when reach bottom
      if (0 < h && h < gravity && Math.abs(this.vy) <= gravity) {
        this.y = height - this.radius;
        this.active = false;
      }
    }
  }

  move() {
    if (!this.active) return;

    this.vy += gravity;
    this.y += this.vy;
    this.x += this.vx;

    this.checkWall();
  }
}

export interface BouncingBallProps {
  className?: string;
}

function useInterval(callback, delay) {
  const intervalRef = React.useRef<number>();
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );

      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  return intervalRef;
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function BouncingBall(props: BouncingBallProps) {
  const { className } = props;
  const [balls, setBalls] = useState([new Ball()]);

  const onClick: MouseEventHandler<SVGRectElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect(), // adjust mouse position
      x = ((event.clientX - rect.left) * height) / rect.height,
      y = ((event.clientY - rect.top) * width) / rect.width;
    balls.push(new Ball(x, y));
    setBalls([...balls]);
  };

  useInterval(() => {
    let i = 0;
    while (i < balls.length) {
      balls[i++].move();
      // balls[i++].collision(balls);
    }

    setBalls([...balls]);
  }, 30);

  return (
    <div className={className}>
      <svg
        className="h-full w-full"
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="1080"
          height="1080"
          stroke="red"
          strokeWidth="2"
          onClick={onClick}
          fill="transparent"
        />
        {balls.map((ball, index) => (
          <circle
            key={index}
            cx={ball.x}
            cy={ball.y}
            r={ball.radius}
            fill={ball.fill}
          />
        ))}
      </svg>
    </div>
  );
}

export default BouncingBall;
