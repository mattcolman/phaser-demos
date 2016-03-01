import GameState from 'states/GameState';

class Animations extends GameState {

  preload() {
    this.game.load.atlasJSONArray('sandy', 'images/sandy.png', 'images/sandy.json')
    this.game.load.atlasJSONArray('bat', 'images/bat.png', 'images/bat.json')
  }

	create() {
    console.log('Animations State')

    let sandy = this.game.add.sprite(600, 500, 'sandy', "sandy_frogwump/walk_0000")
    sandy.animations.add('sandy_frogwump/walk')
    sandy.play('sandy_frogwump/walk', 25, true)
    sandy.anchor.set(.5)
    sandy.scale.set(-1, 1)

    this.game.add.tween(sandy).to({x: 1000}, 1200, 'Linear', true, 0, -1, true)

    let bat = this.game.add.sprite(220, 220, 'bat', 'bat/0000')
    bat.anchor.set(.5)
    bat.animations.add('fly')
    bat.play('fly', 15, true)

    super.create()
  }

  handleOnComplete() {
    console.log('handleOnComplete')
  }
}

export default Animations;
