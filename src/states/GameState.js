import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
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
    	this.layer.scale.set(2.5);
		this.layer.wrap = true;
    	//  Un-comment this on to see the collision tiles
    	// this.layer.debug = true;
    	this.layer.resizeWorld();

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

		// mario animations
		this.mario = this.game.add.sprite(128, 128, 'mario');
		this.mario.animations.add('idle', [0]);
		this.mario.animations.add('walk', [1,2,3]);
		this.mario.animations.add('jump', [5,4]);
		// this.mario.x = center.x - 64;
		this.mario.y = center.y + 250;

		// metrobus
		this.metrobus = this.game.add.sprite(1676, 280, 'metrobus');
		this.metrobus.x = 2000;
		this.metrobus.y = 0;

		// mario physics
		this.game.physics.arcade.enable([this.mario, this.metrobus]);
		this.game.physics.arcade.gravity.y = 700;
		this.mario.body.bounce.y = 0;
		this.mario.body.linearDamping = 5;
		this.mario.body.collideWorldBounds = true;
		this.mario.body.fixedRotation = true;

		// metrobus attr
		this.metrobus.scale.x = -1;
		this.metrobus.physicsType = Phaser.SPRITE;
		this.metrobus.body.enable = true;

		this.metrobus.body.bounce.y = 0;
		this.metrobus.body.linearDamping = 1;
		this.metrobus.collideWorldBounds = true;
		this.metrobus.body.fixedRotation = true;
		this.game.camera.follow(this.mario);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

	update() {
		// this.game.physics.arcade.collide([this.mario, this.metrobus], this.layer);
		this.doNothing = true;
		if (this.cursors.left.isDown && !this.leftAnimationCompleted)
		{
			if (this.direction != 'left') {
				this.mario.scale.x *= -1;
				this.mario.x += 128;
				this.direction = 'left';
			}

			if (this.mario.body.velocity.x == 0 ||
			(this.mario.animations.currentAnim.name!='left' && this.mario.body.onFloor())
			)
			{
				this.mario.animations.play('walk', 6, true);
			}

			this.mario.body.velocity.x -= 5;
			this.doNothing = false;
		}
		else if (this.cursors.right.isDown)
		{
			if(this.direction!='right'){
				this.mario.scale.x *= -1;
				this.mario.x -= 128;
				this.direction = 'right';
			}
			if(this.mario.body.velocity.x==0 ||
			(this.mario.animations.currentAnim.name!='left' && this.mario.body.onFloor()))
			{
				this.mario.animations.play('walk', 6, true);
			}
			this.mario.body.velocity.x += 5;
			this.doNothing = false;
		}

		if(this.doNothing){
			if(this.mario.body.velocity.x>10){
			//mario.sprite.body.acceleration.x = 10;
			this.mario.body.velocity.x -= 10;
			} else if(this.mario.body.velocity.x<-10){
			//mario.sprite.body.acceleration.x = -10;
			this.mario.body.velocity.x += 10;
			}else{
			//mario.sprite.body.acceleration.x = 0;
			this.mario.body.velocity.x = 0;
			}
			if(this.mario.body.onFloor()){
				this.mario.animations.play('idle', 20, true);
			}
		}
		
		
		if (this.jumpButton.isDown)
		{
			if(this.mario.body.onFloor()){
				this.mario.body.velocity.y = -310;
				this.mario.animations.play('jump', 8);
				this.doNothing = false;
			}
		} 
	}

}

export default GameState;
