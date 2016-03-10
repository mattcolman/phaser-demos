import GameState from 'states/GameState';
import _ from 'lodash';
import Reel from 'states/reel';

class SlotMachine extends GameState {

  preload() {
    this.game.load.atlasJSONArray('avatars', 'images/avatars.png', 'images/avatars.json')
  }

	create() {
    console.log('SlotMachine States')

    this.reel1 = new Reel(this.game, 'reel1')
    this.reel2 = new Reel(this.game, 'reel2')
    this.reel2.x = this.reel1.width
    this.reel3 = new Reel(this.game, 'reel3')
    this.reel3.x = this.reel1.width*2
    this.world.addChild(this.reel1)
    this.world.addChild(this.reel2)
    this.world.addChild(this.reel3)

    window.SlotMachine = this;
    super.create()
  }

  spin() {
    var results = [
      [0, 1, 1],
      [2, 2, 2],
      [3, 1, 1]
    ]

    let tl = new TimelineMax()
    tl.call(this.reel1.spin, [], this.reel1, 0)
      .call(this.reel2.spin, [], this.reel2, .1)
      .call(this.reel3.spin, [], this.reel3, .2)
      .call(this.stop, [results], this, 2)
  }

  stop(results) {
    let tl = new TimelineMax()
    tl.call(this.reel1.stop, [[results[0][0], results[1][0], results[2][0]]], this.reel1, 0)
      .call(this.reel2.stop, [[results[0][1], results[1][1], results[2][1]]], this.reel2, .1)
      .call(this.reel3.stop, [[results[0][2], results[1][2], results[2][2]]], this.reel3, .2)
  }

}

export default SlotMachine;
