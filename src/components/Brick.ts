import { Vector } from './types'

export class Brick {
  constructor(
    brickWidth: number,
    brickHeight: number,
    position: Vector,
    brickEnergy: number,
    image: string,
  ) {
    this.brickHeight = brickHeight;
    this.brickWidth = brickWidth;
    this.brickEnergy = brickEnergy;
    this.position = position;
    this.brickImage.src = image;
  }
  get width(): number {
    return this.brickWidth
  }
  get height(): number {
    return this.brickHeight
  }
  get image(): HTML_ImageElement {
    return this.brickImage
  }

  get position(): Vector {
    return this.position
  }

  get energy(): number {
    return this.brickEnergy
  }

  set energy(energy:number) {
    this.brickEnergy = energy
  }

  reduceEnergy() {
    this.brickEnergy -= 1
  }

}
