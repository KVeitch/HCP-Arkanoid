import { Brick } from './components/Brick';
import {
  BRICK_IMAGES,
  BRICK_LAY_OUT,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY
} from './constants';

export function createBricks(): Brick[] {
  return BRICK_LAY_OUT.reduce((ack, element, i) => {
    const row = Math.floor((i + 1) / STAGE_COLS);
    const col = i % STAGE_COLS;

    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    if (element === 0) return ack;

    return [
      ...ack,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        { x, y },
        BRICK_ENERGY[element],
        BRICK_IMAGES[element]
      )
    ];
  }, [] as Brick[]);
}