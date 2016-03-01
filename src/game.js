import GameState from 'states/GameState';
import $ from "jquery";
import Boot from 'states/boot';
import Buttons from 'states/buttons';
import BunnyMark from 'states/bunnymark';
import Animations from 'states/animations';

class Game extends Phaser.Game {

  setupStage() {
    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE
    this.width = 1366
    this.height = 768
    this.scale.setResizeCallback(()=>{
      let w = $(window).width()/this.width
      let h = $(window).height()/this.height
      let scale = Math.min(w, h)
      this.scale.setUserScale(scale, scale)
    })
  }

  addStates() {
    Game.states.forEach( ([name, stateClass]) => {
      this.state.add(name, stateClass)
    })
  }

  startGame() {
    console.log('start game')
    this.stateIndex = 0
    this.nextState()
  }

  nextState() {
    this.gotoStateByIndex(this.stateIndex + 1)
  }

  prevState() {
    this.gotoStateByIndex(this.stateIndex - 1)
  }

  gotoStateByIndex(index) {
    index = Math.min(index, Game.states.length-1)
    index = Math.max(index, 1)
    this.stateIndex = index
    this.state.start(Game.states[index][0])
  }

}

Game.states = [
  ['boot', Boot],
  ['animations', Animations],
  ['buttons', Buttons],
  ['bunnymark', BunnyMark]
]

export default Game;
