window.onload = function() {
  window['game'] = new Phaser.Game(288, 505, Phaser.AUTO, '');
  game.state.add('boot', new Boot());
  game.state.add('preload', new Preload());
  game.state.add('menu', new Menu());
  game.state.add('play', new Play());
  game.state.add('gameover', new Gameover());
  return game.state.start('boot');
};
