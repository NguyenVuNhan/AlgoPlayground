import { useInterval } from '@algo-playground/shared/web/hooks';
import React, { MouseEventHandler, useState } from 'react';
import Ball, { resolveSteps, height, width } from './Ball';

export interface BouncingBallProps {
  className?: string;
}

export function BouncingBall(props: BouncingBallProps) {
  const { className } = props;
  const [balls, setBalls] = useState([new Ball()]);

  const onClick: MouseEventHandler<SVGRectElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect(), // adjust mouse position
      x = ((event.clientX - rect.left) * height) / rect.height,
      y = ((event.clientY - rect.top) * width) / rect.width;
    balls.push(new Ball({ x, y }));
    setBalls([...balls]);
  };

  useInterval(() => {
    let i = 0,
      j = resolveSteps;

    while (i < balls.length) {
      balls[i++].move();
    }

    while (j--) {
      i = 0;
      while (i < balls.length) {
        balls[i++].collision(balls);
      }
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
