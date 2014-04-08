class Boot extends Phaser.State

  preload: ->

  create: ->
    @game.stage.backgroundColor = '#000000'
    @game.state.start 'preload'