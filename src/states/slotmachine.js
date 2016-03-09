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
    let tl = new TimelineMax()
    tl.call(this.reel1.spin, [], this.reel1, 0)
      .call(this.reel2.spin, [], this.reel2, .1)
      .call(this.reel3.spin, [], this.reel3, .2)
      .call(this.reel1.stop, [], this.reel1, 2)
      .call(this.reel2.stop, [], this.reel2, 2.1)
      .call(this.reel3.stop, [], this.reel3, 2.2)
  }

}

export default SlotMachine;
