import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

  preload() {
    this.load.crossOrigin = 'anonymous'
  }

	create() {
    this.stage.backgroundColor = "#4488AA";
    let spacing = 80;
    let back = this.makeButton('back', spacing, this.world.height - spacing)
    let next = this.makeButton('next', this.world.width - spacing, this.world.height - spacing)
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
  }

}

export default GameState;
