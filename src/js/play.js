var Play,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Play = (function(_super) {
  __extends(Play, _super);

  function Play() {
    return Play.__super__.constructor.apply(this, arguments);
  }

  Play.prototype.preload = function() {};

  Play.prototype.create = function() {
    var text_style, title_style;
    this.game.stage.backgroundColor = '#A4DF83';
    text_style = {
      font: '16px Arial',
      fill: '#000000',
      align: 'center'
    };
    title_style = {
      font: '65px Arial',
      fill: '#000000',
      align: 'center'
    };
    this.titleText = this.game.add.text(this.game.world.centerX, 300, 'Play', title_style);
    this.titleText.anchor.setTo(0.5, 0.5);
    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click to gameover', text_style);
    return this.instructionsText.anchor.setTo(0.5, 0.5);
  };

  Play.prototype.update = function() {
    if (this.game.input.activePointer.justPressed()) {
      return this.game.state.start('gameover');
    }
  };

  return Play;

})(Phaser.State);
