class Preload extends Phaser.State
  preload: ->

  create: ->
    @game.state.start('menu')

  update: ->