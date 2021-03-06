class Menu extends Phaser.State

  create: ->
    @game.stage.backgroundColor = '#83D0DF'

    @sprite = @game.add.sprite(@game.world.centerX, 138, 'logo')
    @sprite.anchor.setTo(0.5, 0.5)

    text_style  =
      font: '16px Arial'
      fill: '#000000'
      align: 'center'

    title_style =
      font: '65px Arial'
      fill: '#000000'
      align: 'center'

    @titleText = @game.add.text(@game.world.centerX, 260, 'Menu', title_style)
    @titleText.anchor.setTo(0.5, 0.5)

    @instructionsText = @game.add.text(@game.world.centerX, 315, 'Click to Play', text_style)
    @instructionsText.anchor.setTo(0.5, 0.5)

  update: ->
    @game.state.start('play') if @game.input.activePointer.justPressed()