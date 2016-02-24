import Game from 'game';

var init = function() {
  console.log('what is game.state', Game.states)
  let game = new Game(1366, 768, Phaser.AUTO, 'content', Game.states[0][1], false, true, null)
}

init();

