Phaser Game Template
====================

A quick starting template for creating a new game with [phaser.io](http://phaser.io) and coffeescript


### Getting Started
First you'll need a few starting requirements; namely node, gulp, and coffeescript

````
# install node on ubuntu
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install python-software-properties python g++ make nodejs

# install gulp and coffee via node
sudo npm install -g gulp
sudo npm install -g coffee-script
````

Then clone this repository

````
git clone git@github.com:nazgum/phaser-game-template.git
````

The main folder you work out of is src/coffee.

### Go Gulp
To go to work start `gulp` in your working directory.  This will start a server on localhost:9000 to work on that autoreloads whenever you make changes.

To package up your final product with CocoonJS or PhoneGap run `gulp build` and zip up the dist folder.

### Phaser generators
Great generators for Phaser using Yeoman.io

* https://github.com/codevinsky/generator-phaser-official
* https://github.com/julien/generator-phaser
* https://github.com/rcolinray/generator-phaser-typescript
