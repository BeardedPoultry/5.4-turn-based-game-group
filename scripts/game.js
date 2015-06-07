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

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		if (code === 88) {
			GameApp.vent.trigger('magic');
		};
	});

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		if (code === 49) {
			GameApp.vent.trigger('use:health-potion');
		};
	});

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		if (code === 50) {
			GameApp.vent.trigger('use:bomb');
		};
	});

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		if (code === 51) {
			GameApp.vent.trigger('use:double-whammy');
		};
	});

	GameApp.heroAttack = function() {
		if(canAttack === true) {
			GameApp.hero.attack(GameApp.villain);
			console.log('Villain health remaining: '+GameApp.villain.health);
			checkHealth();
			GameApp.villainAttack();
			$('.instructions').fadeOut();
			$('.villain-turn').fadeIn();
			canAttack = false;
		}
	}

	GameApp.villainAttack = function() {
		setTimeout(function() {
			GameApp.villain.attack(GameApp.hero);
			checkHealth();	
			$('.villain-turn').fadeOut();
			$('.instructions').fadeIn();
			console.log('Hero health remaining: '+GameApp.hero.health);
			console.log('ready');
			canAttack = true;
		}, 3000);
	}

	GameApp.heroMagic = function() {
		if(canAttack === true) {
			GameApp.hero.magic(GameApp.villain);
			console.log('Villain health remaining: ' + GameApp.villain.health);
			checkHealth();
			GameApp.villainAttack();
			$('.instructions').fadeOut();
			$('.villain-turn').fadeIn();
			canAttack = false;
		}
	}

	GameApp.useHealth = function() {
		if(canAttack === true) {
			GameApp.hero.useItem('health-potion');
			console.log('Hero health remaining: ' + GameApp.hero.health);
			checkHealth();
			GameApp.villainAttack();
			$('.instructions').fadeOut();
			$('.villain-turn').fadeIn();
			canAttack = false;
		}
	}

	GameApp.useBomb = function() {
		if(canAttack === true) {
			GameApp.hero.useItem('bomb');
			console.log('Hero health remaining: ' + GameApp.hero.health);
			console.log('Villain health remaining: ' + GameApp.villain.health);
			checkHealth();
			GameApp.villainAttack();
			$('.instructions').fadeOut();
			$('.villain-turn').fadeIn();
			canAttack = false;
		}
	}

	GameApp.useWhammy = function() {
		if(canAttack === true) {
			GameApp.hero.useItem('double-whammy');
			console.log('Villain health remaining: ' + GameApp.villain.health);
			checkHealth();
			GameApp.villainAttack();
			$('.instructions').fadeOut();
			$('.villain-turn').fadeIn();
			canAttack = false;
		}
	}

	function checkHealth () {
		if (GameApp.hero.health <= 0) {
			alert("YOU LOST!");
		} else if (GameApp.villain.health <= 0) {
			alert("YOU WON!");
		}
	}

})();
