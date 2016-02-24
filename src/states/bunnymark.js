import GameState from 'states/GameState';

// # BUNNY MARK
// #
// # Based off the PIXI bunny mark http://www.goodboydigital.com/pixijs/bunnymark/
// #
// # RESULTS
// # -- PIXI bunny mark -- Runs at 60fps easily >100,000 bunnies
// # -- Caper bunny mark -- Runs at 60fps ~7000 bunnies
// # We're seeing good results from switching to Phaser (better than Easeljs)
// # but we're still way behind the PIXI bunny mark. We must be able to
// # achieve these results. Might need to tweak the code a bit.
// # Afterall we're still using PIXI to render (Caper -> Phaser -> PIXI)
// #

// # ---------------------------------------------------------- #
// # NUMBER OF BUNNIES
// # ---------------------------------------------------------- #
const NUMBER_OF_BUNNIES = 7000
// # ---------------------------------------------------------- #
// # NUMBER OF BUNNIES
// # ---------------------------------------------------------- #

let bunnys = []
let gravity = 0.5
let width = 1366
let height = 768
let maxX = width
let minX = 0
let maxY = height
let minY = 0
let count = NUMBER_OF_BUNNIES


class BunnyMark extends GameState {

  preload() {
    super.preload()
    this.load.image('bunny', 'images/bunny.png')
  }

  create() {
    super.create()
    let sprites = this.game.add.spriteBatch()
    let i = 0
    while (i < count) {
      let bunny = this.game.make.sprite(0, 0, 'bunny')
      bunny.speedX = Math.random() * 10
      bunny.speedY = Math.random() * 10 - 5
      bunny.anchor.x = 0.5
      bunny.anchor.y = 1
      sprites.addChild(bunny)
      bunnys.push(bunny)
      i++
    }
  }

  update() {
    for (let bunny of bunnys) {
      bunny.position.x += bunny.speedX
      bunny.position.y += bunny.speedY
      bunny.speedY += gravity
      if (bunny.position.x > maxX) {
        bunny.speedX *= -1
        bunny.position.x = maxX
      } else if (bunny.position.x < minX) {
        bunny.speedX *= -1
        bunny.position.x = minX
      }
      if (bunny.position.y > maxY) {
        bunny.speedY *= -0.85
        bunny.position.y = maxY
        bunny.spin = (Math.random() - 0.5) * 0.2
        if (Math.random() > 0.5) bunny.speedY -= Math.random() * 6
      } else if (bunny.position.y < minY) {
        bunny.speedY = 0
        bunny.position.y = minY
      }
    }
  }
}


export default BunnyMark;
