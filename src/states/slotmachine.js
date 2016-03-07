import GameState from 'states/GameState';
import _ from 'lodash';
import GSAP from 'gsap';

class SlotMachine extends GameState {

  preload() {
    this.game.load.atlasJSONArray('avatars', 'images/avatars.png', 'images/avatars.json')
  }

	create() {
    console.log('SlotMachine States')

    this.line = this.makeLine()
    this.maxHeight = this.line.height/2
    this.speed = {y: 50}
    TweenMax.to(this.speed, 3, {delay: 3, y: 0, ease: Back.easeOut.config(1)})

    super.create()
  }

  render() {
    this.line.y += this.speed.y
    if (this.line.y > this.maxHeight) {
      this.line.y = 0
    }
  }

  makeLine() {
    let group = this.game.add.group(this.world, 'group')
    let line  = this._makeSingleLine()
    let line2 = this._makeSingleLine()
    line2.y = -line.height
    group.addChild(line)
    group.addChild(line2)
    group.part = [line, line2]
    return group
  }

  _makeSingleLine() {
    let numSquares = 4
    var group = this.game.make.group(null, 'line')
    let y = 0
    for (var i = 0; i < numSquares; i++) {
      let avatar = this.game.add.sprite(0, y, 'avatars', `0${i+1}`, group)
      y += avatar.height
    }
    return group
  }

}

export default SlotMachine;
