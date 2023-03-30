import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import PADDLE_IMAGE from './assets/images/paddle.png';
import BALL_IMAGE from './assets/images/react.svg';
// import BALL_IMAGE from './assets/images/ball.png';

import { Ball } from './components/Ball';
import { Brick } from './components/Brick';
import { CanvasView } from './components/CanvasView';
import { Paddle } from './components/Paddle';

import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './constants';

import { Collision } from './Collision';
import { createBricks } from './helper';

let gameOver = false;
let score = 0;

const setGameOver = (view: CanvasView) => {
  view.drawInfo('Game Over!');
  gameOver = false;
}

const setGameWin = (view: CanvasView) => {
  view.drawInfo('Game Won!');
  gameOver = false;
}

const gameLoop = (
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision
) => {
  console.log('draw!');
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);

  ball.moveBall();

  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);

  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }

  if (ball.pos.y > view.canvas.height) gameOver = true;
  if (bricks.length === 0) return setGameWin(view);
  if (gameOver) return setGameOver(view);

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

const startGame = (view: CanvasView) => {
  score = 0;
  view.drawInfo('');
  view.drawScore(0);

  const collision = new Collision();
  const bricks = createBricks();

  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_IMAGE
  );

  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5
    },
    PADDLE_IMAGE
  );

  gameLoop(view, bricks, paddle, ball, collision);
}

const view = new CanvasView('#playField');
view.initStartButton(startGame);
