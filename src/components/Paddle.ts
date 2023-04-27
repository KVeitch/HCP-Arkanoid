import { Vector } from "./types";

type Props = {
  speed: number;
  height: number;
  width: number;
  position: Vector;
  img: string;
};

export type PaddleFnType = ReturnType<typeof Paddle>;
export type PaddleFn = (
  speed: number,
  paddleHeight: number,
  paddleWidth: number,
  position: Vector,
  img: string
) => PaddleFnType;

export const Paddle = ({ speed, width, height, position, img }: Props) => {
  const paddleImage: HTMLImageElement = new Image();
  let moveLeft: boolean = false;
  let moveRight: boolean = false;
  let paddleSpeed = speed;
  let paddleWidth = width;
  let paddleHeight = height;
  let paddlePosition = position;
  paddleImage.src = img;

  const getWidth = () => paddleWidth;
  const getHeight = (): number => paddleHeight;
  const pos = (): Vector => paddlePosition;
  const isMovingLeft = (): boolean => moveLeft;
  const isMovingRight = (): boolean => moveRight;
  const movePaddle = (): void => {
    if (moveLeft) pos().x -= paddleSpeed;
    if (moveRight) pos().x += paddleSpeed;
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") moveLeft = false;
    if (e.code === "ArrowRight" || e.key === "ArrowRight") moveRight = false;
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") moveLeft = true;
    if (e.code === "ArrowRight" || e.key === "ArrowRight") moveRight = true;
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  return {
    width: paddleWidth,
    height: paddleHeight,
    pos: paddlePosition,
    image: paddleImage,
    isMovingRight,
    isMovingLeft,
    movePaddle,
  };
};
