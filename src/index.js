import SceneState from 'states/SceneState';
import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(1024, 640, Phaser.AUTO, 'content', null);
		this.state.add('SceneState', SceneState, false);
		this.state.add('GameState', GameState, false);
		this.state.start('SceneState');
		// this.state.start('GameState');
	}

}

new Game();
