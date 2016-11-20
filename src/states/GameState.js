import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
		this.game.stage.backgroundColor = '#787878';
		this.map = this.game.add.tilemap('mario');
    	this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

		this.map.setCollisionBetween(15, 16);
    	this.map.setCollisionBetween(20, 25);
    	this.map.setCollisionBetween(27, 29);
    	this.map.setCollision(40);
    
    	this.layer = this.map.createLayer('World1');
    	this.layer.scale.set(2.5);
		this.layer.wrap = true;
    	//  Un-comment this on to see the collision tiles
    	this.layer.debug = true;
    	this.layer.resizeWorld();

		this.game.physics.startSystem(Phaser.Physics.P2JS);
		this.facing = 'left';
		this.walkTimer = 0;
		this.leftAnimationCompleted = false;
		this.rightAnimationCompleted = false;
		this.jumpTimer = 0;
		this.game.time.desiredFps = 30;
		for (var i = this.game.stage.children.length - 1; i >= 0; i--) {
			if (this.game.stage.children[i].constructor.name == 'RainbowText')
				this.game.stage.removeChild(this.game.stage.children[i]);
		};
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		
		// mario
		this.mario = this.game.add.sprite(128, 128, 'mario');
		this.mario.animations.add('idle', [0]);
		this.mario.animations.add('walk', [1,2,3]);
		this.mario.animations.add('jump', [5,4]);
		this.mario.collideWorldBounds = true;
		this.mario.x = center.x - 64;
		this.mario.y = center.y + 150;

		this.mario.enableBody = true;
    	this.game.physics.p2.restitution = 0.5;
    	this.game.physics.p2.gravity.y = 1000;

		this.game.physics.p2.enable(this.mario);
		this.game.camera.follow(this.mario);

		this.mario.body.fixedRotation = true;

		this.metrobus = this.game.add.image(100, 100, 'metrobus');
		this.metrobus.x = 2600;
		this.metrobus.y = 360;
		this.metrobus.scale.x = -1;
		this.metrobus.enableBody = true;
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

	update() {
		if (this.cursors.left.isDown && !this.leftAnimationCompleted)
		{
			this.mario.scale.x = -1;
			this.mario.animations.play('walk', 6);
			this.mario.animations.currentAnim.onStart.add(function () {
				this.mario.body.moveLeft(300);
			}, this);
			this.mario.animations.currentAnim.onComplete.add(function () {
				this.leftAnimationCompleted = true;
				// facing
				if (this.facing != 'left')
				{
					this.facing = 'left';
				}
			}, this);
		}
		else if (this.cursors.right.isDown && !this.rightAnimationCompleted)
		{
			this.mario.scale.x = 1;
			this.mario.animations.play('walk', 6);
			this.mario.animations.currentAnim.onStart.add(function () {
				this.mario.body.moveRight(300);
			}, this);
			this.mario.animations.currentAnim.onComplete.add(function () {
				this.rightAnimationCompleted = true;
				// facing
				if (this.facing != 'right')
				{
					this.facing = 'right';
				}
			}, this);
		} else {
			if (this.facing != 'idle')
			{
				this.mario.animations.stop();
				this.leftAnimationCompleted = false;
				this.rightAnimationCompleted = false;
				this.mario.animations.play('idle');
				this.facing = 'idle';
			}
		}
		
		
		if (this.jumpButton.isDown && this.game.time.now > this.jumpTimer)
		{
			this.mario.animations.play('jump', 8);
			this.mario.animations.currentAnim.onStart.add(function () {
				this.mario.body.moveUp(500);
			}, this);
			this.mario.animations.currentAnim.onComplete.add(function () {
				this.leftAnimationCompleted = false;
				this.rightAnimationCompleted = false;
				this.facing = 'idle';
			}, this);
			this.jumpTimer = this.game.time.now + 10;
		} 
	}

}

export default GameState;
