import RainbowText from 'objects/RainbowText';

class SceneState extends Phaser.State {

	preload() {
		this.game.load.spritesheet('mario', 'mario-sprite.png', 128, 128, 8);
		this.game.load.spritesheet('metrobus', 'metrobus.png', 1670, 280);
		this.game.load.tilemap('mario', 'super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    	this.game.load.image('tiles', 'super_mario.png');
		this.game.load.audio('maintheme', ['maintheme.mp3', 'maintheme.ogg']);
	}

	create() {
		this.music = this.game.add.audio('maintheme');
		this.music.play();
		this.game.stage.backgroundColor = '#000';
		this.game.physics.startSystem(Phaser.Physics.P2JS);
		this.jumpTimer = 0;
		const style = { font: "bold 18px '8_bit_1_6'", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.game.time.desiredFps = 30;

		// text
		let text = new RainbowText(this.game, center.x, center.y - 100, "mario'yu \metrobuse\nbindir!", '30px');
		let copyright = new RainbowText(this.game, center.x, center.y + 264, "ciu", '14px');
		const startText = this.game.add.text(center.x, center.y + 180, "enter tusuna basmaz miyiz?", style);
		startText.anchor.set(0.5);
		text.anchor.set(0.5);
		copyright.anchor.set(0.5);

		// mario
		this.mario = this.game.add.sprite(128, 128, 'mario');
        this.mario.animations.add('idle', [0,1,2]);
        this.mario.animations.play('idle', 3, true);
		this.mario.x = center.x - 64;
		this.mario.y = center.y;

		this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        this.enterButton.onDown.addOnce(this.start, this);
	}

    start() {
        this.game.state.start('GameState');
    }

}

export default SceneState;
