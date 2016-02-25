import GameState from 'states/GameState';

class Buttons extends GameState {

  preload() {
    this.game.load.atlasJSONArray('button', 'images/button.png', 'images/button.json')
  }

	create() {
    console.log('Button State')
    let leftBtn = this.game.add.button(this.game.world.centerX - 200, 400, 'button', this.onClick, this, 1, 0, 2, 0);
    let rightBtn = this.game.add.button(this.game.world.centerX + 200, 400, 'button', this.onClick, this, 1, 0, 2, 0);
    leftBtn.direction = -1
    rightBtn.direction = 1
    rightBtn.scale = {x: -1, y: 1}
    super.create()
  }

  onClick(target) {
    target.x += target.direction*10
  }

}

export default Buttons;
