var Preload,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Preload = (function(_super) {
  __extends(Preload, _super);

  function Preload() {
    return Preload.__super__.constructor.apply(this, arguments);
  }

  Preload.prototype.preload = function() {};

  Preload.prototype.create = function() {
    return this.game.state.start('menu');
  };

  Preload.prototype.update = function() {};

  return Preload;

})(Phaser.State);
