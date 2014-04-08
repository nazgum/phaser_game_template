class Gameover extends Phaser.State
  preload: ->

  create: ->
    @game.stage.backgroundColor = '#DF838A'

    text_style  =
      font: '16px Arial'
      fill: '#000000'
      align: 'center'

    title_style =
      font: '65px Arial'
      fill: '#000000'
      align: 'center'

    @titleText = @game.add.text(@game.world.centerX, 180, 'Game\n Over', title_style)
    @titleText.anchor.setTo(0.5, 0.5)

    @instructionsText = @game.add.text(@game.world.centerX, 280, 'Click for menu', text_style)
    @instructionsText.anchor.setTo(0.5, 0.5)

  update: ->
    @game.state.start('menu') if @game.input.activePointer.justPressed()