class GameState extends Phaser.State {

  preload() {
    this.load.crossOrigin = 'anonymous'
  }

	create() {
    this.game.time.advancedTiming = true
    this.stage.backgroundColor = "#4488AA";
    let txt = this.add.text(this.world.centerX, 50, this.game.state.current, { font: "bold 32px Arial", fill: "#fff"})
    txt.anchor.set(.5)
    let spacing = 80;
    let back = this.makeButton('back', spacing, this.world.height - spacing)
    let next = this.makeButton('next', this.world.width - spacing, this.world.height - spacing)
  }

  update() {
    this.game.debug.text(this.game.time.fps || '--', 2, 20, "#00ff00", "normal 24px Arial")
  }

  makeButton(str, x, y) {
    var style = { font: "bold 32px Arial", fill: "#fff"};
    let txt = this.add.text(x, y, str, style)
    txt.anchor.set(.5, 0)
    txt.inputEnabled = true
    txt.events.onInputDown.add(this.handleClick, this, 0, str)
  }

  handleClick(pointer, e, type) {
    console.log('clicked', type)
    if (type == 'next') {
      this.game.nextState()
    } else if (type == 'back') {
      this.game.prevState()
    }
  }

}

export default GameState;
