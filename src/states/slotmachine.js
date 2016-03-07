import GameState from 'states/GameState';
import _ from 'lodash';
import GSAP from 'gsap';

class SlotMachine extends GameState {

  preload() {
    this.game.load.atlasJSONArray('avatars', 'images/avatars.png', 'images/avatars.json')
  }

	create() {
    console.log('SlotMachine States')

    let line = this.makeLine()

    TweenMax.to(line, 5, {y: -1000})

    super.create()
  }

  makeLine() {
    let group = this.game.add.group(this.world, 'group')
    let line  = this._makeSingleLine()
    let line2 = this._makeSingleLine()
    line2.y = line.height
    group.addChild(line)
    group.addChild(line2)
    return group
  }

  _makeSingleLine() {
    let numSquares = 4
    var group = this.game.make.group(null, 'line')
    let y = 0
    for (var i = 0; i < numSquares; i++) {
      let avatar = this.game.add.sprite(0, y, 'avatars', "01", group)
      y += avatar.height
    }
    return group
  }

}

export default SlotMachine;
