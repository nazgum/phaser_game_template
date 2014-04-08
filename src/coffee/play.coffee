class Play extends Phaser.State

  preload: ->

  create: ->
    @game.stage.backgroundColor = '#A4DF83'

    text_style  =
      font: '16px Arial'
      fill: '#000000'
      align: 'center'

    title_style =
      font: '65px Arial'
      fill: '#000000'
      align: 'center'

    @titleText = @game.add.text(@game.world.centerX, 180, 'Play', title_style)
    @titleText.anchor.setTo(0.5, 0.5)

    @instructionsText = @game.add.text(@game.world.centerX, 240, 'Click to gameover', text_style)
    @instructionsText.anchor.setTo(0.5, 0.5)

  update: ->
    @game.state.start('gameover') if @game.input.activePointer.justPressed()