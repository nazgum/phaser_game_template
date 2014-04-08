class Preload extends Phaser.State

  @asset: null
  @ready: false


  preload: ->
    @asset = @add.sprite(@width/2, @height/2, 'preloader')
    @asset.anchor.setTo(0.5, 0.5)

    @load.onLoadComplete.addOnce(@onLoadComplete, this)
    @load.setPreloadSprite(@asset)
    @load.image('logo', 'assets/phaser-logo.png')

  create: ->
    @asset.cropEnabled = false

  update: ->
    @game.state.start('menu') if @ready

  onLoadComplete: ->
    @ready = true