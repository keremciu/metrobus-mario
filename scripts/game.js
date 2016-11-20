(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _SceneState = require('states/SceneState');

var _SceneState2 = _interopRequireDefault(_SceneState);

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1024, 640, Phaser.AUTO, 'content', null));

		_this.state.add('SceneState', _SceneState2.default, false);
		_this.state.add('GameState', _GameState2.default, false);
		_this.state.start('SceneState');
		// this.state.start('GameState');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"states/GameState":3,"states/SceneState":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
	_inherits(RainbowText, _Phaser$Text);

	function RainbowText(game, x, y, text, size) {
		_classCallCheck(this, RainbowText);

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: size + " '8_bit_1_6'", fill: "#ff0044", align: "center" }));

		_this._speed = 250; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#FF2500', '#FFFB01', '#0432FF'];

		_this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
		}
	}, {
		key: "colorize",
		value: function colorize() {

			for (var i = 0; i < this.text.length; i++) {

				if (this._colorIndex === this._colors.length) {
					this._colorIndex = 0;
				}

				this.addColor(this._colors[this._colorIndex], i);
				this._colorIndex++;
			}
		}
	}]);

	return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require('objects/RainbowText');

var _RainbowText2 = _interopRequireDefault(_RainbowText);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: 'create',
		value: function create() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.stage.backgroundColor = '#787878';

			this.doNothing = true;
			this.direction = 'right';

			// tilemap
			this.map = this.game.add.tilemap('mario');
			this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

			this.map.setCollisionBetween(14, 16);
			this.map.setCollisionBetween(21, 22);
			this.map.setCollisionBetween(27, 28);
			this.map.setCollisionByIndex(10);
			this.map.setCollisionByIndex(13);
			this.map.setCollisionByIndex(17);
			this.map.setCollisionByIndex(40);

			this.layer = this.map.createLayer('World1');
			this.layer.scale.set(2.66);
			this.layer.wrap = true;
			//  Un-comment this on to see the collision tiles
			// this.layer.debug = true;
			this.layer.resizeWorld();

			this.facing = 'left';
			this.walkTimer = 0;
			this.jumpTimer = 0;
			// this.game.time.desiredFps = 30;
			for (var i = this.game.stage.children.length - 1; i >= 0; i--) {
				if (this.game.stage.children[i].constructor.name == 'RainbowText') this.game.stage.removeChild(this.game.stage.children[i]);
			};
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };

			// mario animations
			this.mario = this.game.add.sprite(128, 128, 'mario');
			this.mario.animations.add('idle', [0, 1, 2]);
			this.mario.animations.add('walk', [3, 4, 5]);
			this.mario.animations.add('jump', [8, 7]);
			// this.mario.x = center.x - 64;
			this.mario.y = center.y + 250;

			// metrobus
			this.metrobus = this.game.add.sprite(1676, 280, 'metrobus');
			this.metrobus.animations.add('idle', 0);
			this.metrobus.animations.add('destroy', [1]);
			this.metrobus.animations.play('idle');
			this.metrobus.x = 4000;
			this.metrobus.y = 0;

			// mario physics
			this.game.physics.arcade.enable([this.mario, this.metrobus]);
			this.game.physics.arcade.gravity.y = 700;
			this.mario.body.bounce.y = 0;
			this.mario.body.linearDamping = 1;
			this.mario.body.collideWorldBounds = true;
			this.mario.body.fixedRotation = true;
			this.mario.body.y = 0;

			// metrobus attr
			this.metrobus.scale.x = -1;
			this.metrobus.physicsType = Phaser.SPRITE;
			this.metrobus.body.enable = true;

			this.metrobus.body.bounce.y = 0;
			this.metrobus.body.linearDamping = 1;
			this.metrobus.body.collideWorldBounds = true;
			this.metrobus.body.fixedRotation = true;
			this.game.camera.follow(this.mario);

			this.cursors = this.game.input.keyboard.createCursorKeys();
			this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		}
	}, {
		key: 'update',
		value: function update() {
			this.mario.body.velocity.x = 0;
			this.metrobus.body.velocity.x -= 30;
			this.game.physics.arcade.collide([this.mario, this.metrobus], this.layer);
			this.game.physics.arcade.collide(this.metrobus, this.mario, this.collisionHandler, null, this);
			this.doNothing = true;
			if (this.cursors.left.isDown) {
				if (this.direction != 'left') {
					this.mario.scale.x *= -1;
					this.mario.body.x += 128;
					this.direction = 'left';
				}

				if (this.mario.body.velocity.x == 0 || this.mario.animations.currentAnim.name != 'left' && this.mario.body.onFloor()) {
					this.mario.animations.play('walk', 8, true);
				}

				this.mario.body.velocity.x -= 256;
				this.doNothing = false;
			} else if (this.cursors.right.isDown) {
				if (this.direction != 'right') {
					this.mario.scale.x *= -1;
					this.mario.body.x -= 128;
					this.direction = 'right';
				}
				if (this.mario.body.velocity.x == 0 || this.mario.animations.currentAnim.name != 'left' && this.mario.body.onFloor()) {
					this.mario.animations.play('walk', 8, true);
				}
				this.mario.body.velocity.x += 256;
				this.doNothing = false;
			}

			if (this.doNothing) {
				if (this.mario.body.velocity.x > 10) {
					//mario.sprite.body.acceleration.x = 10;
					this.mario.body.velocity.x -= 10;
				} else if (this.mario.body.velocity.x < -10) {
					//mario.sprite.body.acceleration.x = -10;
					this.mario.body.velocity.x += 10;
				} else {
					//mario.sprite.body.acceleration.x = 0;
					this.mario.body.velocity.x = 0;
				}
				this.mario.animations.play('idle', 3);
				// if(this.mario.body.onFloor()){
				// 	this.mario.animations.play('idle', 3, true);
				// }
			}

			if (this.jumpButton.isDown) {
				// if(this.mario.body.onFloor()){
				this.mario.body.velocity.y = -810;
				this.mario.animations.play('jump');
				this.doNothing = false;
				console.log(this.mario.animations.currentAnim);
				// this.mario.events.onAnimationComplete.add(this.playStance,this);
				// if (this.mario.animations.currentAnim.name == 'jump') {
				// 	this.mario.animations.currentAnim.onComplete.add(function () {
				// 		this.metrobus.animations.play('destroy');
				// 	}, this);
				// }
				// }
			}
		}
	}, {
		key: 'collisionHandler',
		value: function collisionHandler(obj1, obj2) {
			this.metrobus.animations.play('destroy');
			//  The two sprites are colliding
			this.game.stage.backgroundColor = '#992d2d';
		}
	}, {
		key: 'render',
		value: function render() {
			this.game.time.advancedTiming = true;
			this.game.debug.text(this.game.time.fps || '--', 2, 14, "#ffffff");
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/RainbowText":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require('objects/RainbowText');

var _RainbowText2 = _interopRequireDefault(_RainbowText);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SceneState = function (_Phaser$State) {
	_inherits(SceneState, _Phaser$State);

	function SceneState() {
		_classCallCheck(this, SceneState);

		return _possibleConstructorReturn(this, (SceneState.__proto__ || Object.getPrototypeOf(SceneState)).apply(this, arguments));
	}

	_createClass(SceneState, [{
		key: 'preload',
		value: function preload() {
			this.game.load.spritesheet('mario', 'mario-sprite.png', 128, 128, 8);
			this.game.load.spritesheet('metrobus', 'metrobus.png', 1670, 280);
			this.game.load.tilemap('mario', 'super_mario.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tiles', 'super_mario.png');
			this.game.load.audio('maintheme', ['maintheme.mp3', 'maintheme.ogg']);
		}
	}, {
		key: 'create',
		value: function create() {
			this.music = this.game.add.audio('maintheme');
			this.music.play();
			this.game.stage.backgroundColor = '#000';
			this.game.physics.startSystem(Phaser.Physics.P2JS);
			this.jumpTimer = 0;
			var style = { font: "bold 18px '8_bit_1_6'", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			this.game.time.desiredFps = 30;

			// text
			var text = new _RainbowText2.default(this.game, center.x, center.y - 100, "mario'yu \metrobuse\nbindir!", '30px');
			var copyright = new _RainbowText2.default(this.game, center.x, center.y + 264, "ciu", '14px');
			var startText = this.game.add.text(center.x, center.y + 180, "enter tusuna basmaz miyiz?", style);
			startText.anchor.set(0.5);
			text.anchor.set(0.5);
			copyright.anchor.set(0.5);

			// mario
			this.mario = this.game.add.sprite(128, 128, 'mario');
			this.mario.animations.add('idle', [0, 1, 2]);
			this.mario.animations.play('idle', 3, true);
			this.mario.x = center.x - 64;
			this.mario.y = center.y;

			this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

			this.enterButton.onDown.addOnce(this.start, this);
		}
	}, {
		key: 'start',
		value: function start() {
			this.game.state.start('GameState');
		}
	}]);

	return SceneState;
}(Phaser.State);

exports.default = SceneState;

},{"objects/RainbowText":2}]},{},[1])
//# sourceMappingURL=game.js.map
