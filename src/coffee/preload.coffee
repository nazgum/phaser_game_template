class Preload extends Phaser.State
  preload: ->

  create: ->
    @game.stage.backgroundColor = '#FFFFFF'
    @game.state.start 'menu'

  update: ->