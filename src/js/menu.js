var Menu,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Menu = (function(_super) {
  __extends(Menu, _super);

  function Menu() {
    return Menu.__super__.constructor.apply(this, arguments);
  }

  Menu.prototype.preload = function() {};

  Menu.prototype.create = function() {
    var text_style, title_style;
    this.game.stage.backgroundColor = '#83D0DF';
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
    this.titleText = this.game.add.text(this.game.world.centerX, 180, 'Menu', title_style);
    this.titleText.anchor.setTo(0.5, 0.5);
    this.instructionsText = this.game.add.text(this.game.world.centerX, 235, 'Click to Play', text_style);
    return this.instructionsText.anchor.setTo(0.5, 0.5);
  };

  Menu.prototype.update = function() {
    if (this.game.input.activePointer.justPressed()) {
      return this.game.state.start('play');
    }
  };

  return Menu;

})(Phaser.State);
