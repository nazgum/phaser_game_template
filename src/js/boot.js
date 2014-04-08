var Boot,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Boot = (function(_super) {
  __extends(Boot, _super);

  function Boot() {
    return Boot.__super__.constructor.apply(this, arguments);
  }

  Boot.prototype.preload = function() {};

  Boot.prototype.create = function() {
    this.game.stage.backgroundColor = '#83D0DF';
    return this.game.state.start('preload');
  };

  return Boot;

})(Phaser.State);
