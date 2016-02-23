import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
    this.stage.backgroundColor = "#4488AA";
    let back = this.makeButton('back', 20, 20)
		let next = this.makeButton('next', 400, 20)
	}

  makeButton(str, x, y) {
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.add.text(x, y, str, style)
  }

}

export default GameState;
