var Gameover,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Gameover = (function(_super) {
  __extends(Gameover, _super);

  function Gameover() {
    return Gameover.__super__.constructor.apply(this, arguments);
  }

  Gameover.prototype.preload = function() {};

  Gameover.prototype.create = function() {
    var text_style, title_style;
    this.game.stage.backgroundColor = '#DF838A';
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
    this.titleText = this.game.add.text(this.game.world.centerX, 180, 'Game\n Over', title_style);
    this.titleText.anchor.setTo(0.5, 0.5);
    this.instructionsText = this.game.add.text(this.game.world.centerX, 280, 'Click for menu', text_style);
    return this.instructionsText.anchor.setTo(0.5, 0.5);
  };

  Gameover.prototype.update = function() {
    if (this.game.input.activePointer.justPressed()) {
      return this.game.state.start('menu');
    }
  };

  return Gameover;

})(Phaser.State);
