class RainbowText extends Phaser.Text {

	constructor(game, x, y, text, size) {

		super(game, x, y, text, { font: size + " '8_bit_1_6'", fill: "#ff0044", align: "center" });

		this._speed = 250; //ms
		this._colorIndex = 0;
		this._colors = ['#ee4035', '#FF2500', '#FFFB01', '#0432FF'];

		this.colorize();
		this.startTimer();

		this.game.stage.addChild(this);

	}
	
	startTimer() {
		this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
	}

	colorize() {

		for (let i = 0; i < this.text.length; i++) {

			if (this._colorIndex === this._colors.length) {
				this._colorIndex = 0;
			}

			this.addColor(this._colors[this._colorIndex], i);
			this._colorIndex++;

		}

	}

}

export default RainbowText;