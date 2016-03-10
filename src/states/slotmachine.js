import GameState from 'states/GameState';
import _ from 'lodash';
import Reel from 'states/reel';

const NUM_REELS = 3;

class SlotMachine extends GameState {

  preload() {
    this.game.load.atlasJSONArray('avatars', 'images/avatars.png', 'images/avatars.json')
  }

	create() {
    console.log('SlotMachine States')

    var tx = 0
    this.reels = []
    for (var i = 0; i < NUM_REELS; i++) {
      let r = new Reel(this.game, `reel${i}`)
      r.x = tx
      tx += r.width
      this.world.addChild(r)
      this.reels.push(r)
    }

    window.SlotMachine = this;
    super.create()
  }

  spin() {
    console.log('this.numReels', this.numReels)
    var results = [
      [0, 1, 1],
      [2, 2, 2],
      [3, 1, 1]
    ]

    var tl = new TimelineMax()
    var delay = 0
    this.reels.forEach((reel)=>{
      tl.call(reel.spin, [], reel, delay+=.1)
    })
    tl.call(this.stop, [results], this, 2)
  }

  stop(results) {
    let tl = new TimelineMax()
    var i = 0
    var delay = 0
    this.reels.forEach((reel)=>{
      tl.call(reel.stop, [[results[0][i], results[1][i], results[2][i]]], reel, delay+=.1)
      i++
    })
  }

}

// var p = SlotMachine.prototype;
// p.numReels = 3

export default SlotMachine;
