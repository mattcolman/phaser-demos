import GameState from 'states/GameState';

class Sounds extends GameState {

  preload() {
    this.game.load.atlasJSONArray('bat', 'images/bat.png', 'images/bat.json')
    this.game.load.audio('pop', 'audio/bottle_pop.mp3')
  }

	create() {
    console.log('Sound State')

    this.addBat()

    super.create()
  }

  addBat() {
    var bat = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bat', 'bat/0000')
    bat.anchor.set(.5)
    bat.animations.add('fly')

    bat.inputEnabled = true
    bat.events.onInputDown.add( ()=> {
      this.game.add.sound('pop').play()
      bat.play('fly', 15)
    } )
    bat.events.onAnimationComplete.add( ()=> {
      bat.frame = 0;
    })
  }
}

export default Sounds;
