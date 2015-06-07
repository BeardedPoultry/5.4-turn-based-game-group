window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	var canAttack = true;

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		if (code === 32) {
			GameApp.vent.trigger('attack');
		};
	});

	GameApp.heroAttack = function() {
		if(canAttack === true) {
			GameApp.hero.attack(GameApp.villain);
			console.log(GameApp.villain.health);
			checkHealth();
			GameApp.villainAttack();
			canAttack = false;
		}
	}

	GameApp.villainAttack = function() {
		setTimeout(function() {
			GameApp.villain.attack(GameApp.hero);
			checkHealth();	
			console.log(GameApp.hero.health);
			console.log('ready');
			canAttack = true;
		}, 3000);
	}

	function checkHealth () {
		if (GameApp.hero.health <= 0) {
			alert("YOU LOST!");
		} else if (GameApp.villain.health <= 0) {
			alert("YOU WON!");
		}
	}

})();
