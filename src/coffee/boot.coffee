class Boot extends Phaser.State

  create: ->
    @game.stage.backgroundColor = '#83D0DF'
    @game.state.start 'preload'