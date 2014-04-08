class Play extends Phaser.State

  preload: ->

  create: ->
    @game.stage.backgroundColor = '#A4DF83'

    text_style  = { font: '16px Arial', fill: '#000000', align: 'center'}
    title_style = { font: '65px Arial', fill: '#000000', align: 'center'}

    @titleText = @game.add.text(@game.world.centerX, 300, 'Play', title_style)
    @titleText.anchor.setTo(0.5, 0.5)

    @instructionsText = @game.add.text(@game.world.centerX, 400, 'Click to gameover', text_style)
    @instructionsText.anchor.setTo(0.5, 0.5)

  update: ->
    if @game.input.activePointer.justPressed()
      @game.state.start('gameover')