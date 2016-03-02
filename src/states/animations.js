import GameState from 'states/GameState';
import _ from 'lodash';
import GSAP from 'gsap';

class Animations extends GameState {

  preload() {
    this.game.load.atlasJSONArray('sandy', 'images/sandy.png', 'images/sandy.json')
    this.game.load.atlasJSONArray('bat', 'images/bat.png', 'images/bat.json')
  }

	create() {
    console.log('Animations State')

    this.addSandy()
    this.addBat()
    this.addTweenMaxSandy()

    super.create()
  }

  addSandy() {
    let sandy = this.game.add.sprite(600, 500, 'sandy', "sandy_frogwump/walk_0000")
    sandy.animations.add('sandy_frogwump/walk')
    sandy.play('sandy_frogwump/walk', 25, true)
    sandy.anchor.set(.5)
    sandy.scale.set(-1, 1)

    this.game.add.tween(sandy).to({x: 1000}, 1000, 'Linear', true, 0, -1, true)
  }

  addBat() {
    let bat = this.game.add.sprite(220, 220, 'bat', 'bat/0000')
    bat.anchor.set(.5)
    bat.animations.add('fly')
    bat.play('fly', 15, true)
  }

  // interestingly enough they don't perfectly stay in sync :/
  // does this mean having 2 tickers is...bad?
  addTweenMaxSandy() {
    let sandy = this.game.add.sprite(600, 600, 'sandy', "sandy_frogwump/walk_0000")
    sandy.animations.add('sandy_frogwump/walk')
    sandy.play('sandy_frogwump/walk', 25, true)
    sandy.anchor.set(.5)
    sandy.scale.set(-1, 1)

    // oh wow this was so much easier!
    let tl = new TimelineMax({repeat: -1})
    tl.call(()=>{sandy.scale.set(-1, 1)})
      .to(sandy, 1, {x: 1000, ease: Linear.easeNone})
      .call(()=>{sandy.scale.set(1, 1)})
      .to(sandy, 1, {x: 600, ease: Linear.easeNone})
  }

  handleOnComplete() {
    console.log('handleOnComplete')
  }
}

export default Animations;
