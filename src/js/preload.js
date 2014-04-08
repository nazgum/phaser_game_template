var Preload,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Preload = (function(_super) {
  __extends(Preload, _super);

  function Preload() {
    return Preload.__super__.constructor.apply(this, arguments);
  }

  Preload.asset = null;

  Preload.ready = false;

  Preload.prototype.preload = function() {
    this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    return this.load.image('logo', 'assets/phaser-logo.png');
  };

  Preload.prototype.create = function() {
    return this.asset.cropEnabled = false;
  };

  Preload.prototype.update = function() {
    if (this.ready) {
      return this.game.state.start('menu');
    }
  };

  Preload.prototype.onLoadComplete = function() {
    return this.ready = true;
  };

  return Preload;

})(Phaser.State);
