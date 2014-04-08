window.onload = ->
  'use strict'

  game = window['game']
  ns   = window['game']

  game = new Phaser.Game(800, 480, Phaser.AUTO, '')
  game.state.add('boot', ns.Boot)
  game.state.add('preloader', ns.Preloader)
  game.state.add('menu', ns.Menu)
  game.state.add('game', ns.Game)

  game.state.start('boot')