class Boot extends Phaser.State

  preload: ->

  create: ->
    @game.stage.backgroundColor = '#83D0DF'
    @game.state.start 'preload'