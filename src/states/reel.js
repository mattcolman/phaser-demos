import _ from 'lodash';

class Reel extends Phaser.Group {

  constructor(game, name) {
    super(game, null, 'reel')

    this.name = name;
    this.dummyData = [1, 2, 3] // the final line
    this.makeLine()
    this.maxHeight = this.height/2
    this.y = 0
  }

  spin() {
    console.log('spin ' + this.name)
    TweenMax.killTweensOf(this)
    this.y = 0
    this.spinner = TweenMax.to(this, .3, {y: this.maxHeight, repeat: -1, ease: Linear.easeNone})
  }

  stop(results) {
    this.spinner.pause().kill(); // interesting, you actually have to pause before you kill to ensure there's not another tick after this.
    this.y = 0;

    this.setLine(results)

    TweenMax.to(this, .8, {y: this.maxHeight, ease: Back.easeOut.config(1)})
  }

  setLine(results) {
    var part = this.part[1]
    for (var i = 0; i < results.length; i++) {
      part.getChildAt(i).frame = results[i]
    }
  }

  makeLine() {
    let line  = this._makeSingleLine()
    let line2 = this._makeSingleLine()
    line2.y = -line.height
    this.addChild(line)
    this.addChild(line2)
    this.part = [line, line2]
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

export default Reel;
