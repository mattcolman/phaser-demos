import GameState from 'states/GameState';
import $ from "jquery";
import Boot from 'states/boot';
import State1 from 'states/state1';

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
    this.state.start('state1')
  }

}

Game.states = [
  ['boot', Boot],
  ['state1', State1]
]

export default Game;
