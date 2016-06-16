window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	var canAttack = true;
	var usedMagic = false;
	var usedPotion = false;
	var usedBomb = false;
	var usedWhammy = false;

	// The following are events that are triggered when certain keys are pressed, corresponding
	// with an attack or inventory item belonging to the hero.

	$(document).on('keydown', function(e) {
		var code = e.keyCode;
		e.preventDefault();
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
			GameApp.changeVillainHealth();
			if(checkHealth()) {
				GameApp.villainAttack();
				$('.instructions').fadeOut();
				$('.villain-turn').fadeIn();
			}
			canAttack = false;
		}
	}

	GameApp.villainAttack = function() {
		setTimeout(function() {
			GameApp.villain.attack(GameApp.hero);
			GameApp.changeHeroHealth();
			if(checkHealth()) {
				$('.villain-turn').fadeOut();
				$('.instructions').fadeIn();
				console.log('Hero health remaining: '+GameApp.hero.health);
				console.log('ready');
				canAttack = true;
			}
		}, 3000);
	}

	GameApp.heroMagic = function() {
		if(usedMagic === false) {
			if(canAttack === true) {
				GameApp.hero.magic(GameApp.villain);
				GameApp.changeVillainHealth();
				if(checkHealth()) {
					GameApp.villainAttack();
					$('.instructions').fadeOut();
					$('.villain-turn').fadeIn();
				};
				canAttack = true;
				usedMagic = true;
			}
		} else {
			$('.hero-img .damage').fadeIn();
			$('.hero-img .damage').text('Already used magic attack!');
			$('.hero-img .damage').fadeOut(3500);
		}
	}

	GameApp.useHealth = function() {
		if(var usedPotion === false) {
			if(canAttack === true) {
				GameApp.hero.useItem('health-potion');
				GameApp.changeHeroHealth();
				if(checkHealth()) {
					GameApp.villainAttack();
					$('.instructions').fadeOut();
					$('.villain-turn').fadeIn();
				};
				canAttack = false;
				usedPotion = true;
			}
		} else {
			$('.hero-img .damage').fadeIn();
			$('.hero-img .damage').text('Already used health potion!');
			$('.hero-img .damage').fadeOut(3500);
		}
	}

	GameApp.useBomb = function() {
		if(usedBomb === false) {
			if(canAttack === true) {
				GameApp.hero.useItem('bomb');
				GameApp.changeVillainHealth();
				GameApp.changeHeroHealth();
				if(checkHealth()) {
					GameApp.villainAttack();
					$('.instructions').fadeOut();
					$('.villain-turn').fadeIn();
				};
				canAttack = false;
				usedBomb = true;
			}
		} else {
			$('.hero-img .damage').fadeIn();
			$('.hero-img .damage').text('Already used bomb attack!');
			$('.hero-img .damage').fadeOut(3500);
		}
	}

	GameApp.useWhammy = function() {
		if (usedWhammy === false) {
			if(canAttack === true) {
				GameApp.hero.useItem('double-whammy');
				GameApp.changeVillainHealth();
				if(checkHealth()) {
					GameApp.villainAttack();
					$('.instructions').fadeOut();
					$('.villain-turn').fadeIn();
				};
				canAttack = false;
			}
		} else {
			$('.hero-img .damage').fadeIn();
			$('.hero-img .damage').text('Already used double whammy!');
			$('.hero-img .damage').fadeOut(3500);
		}
	}

	function checkHealth () {
		if (GameApp.hero.health <= 0) {
			alert("YOU LOST!");
			return false;
		} else if (GameApp.villain.health <= 0) {
			alert("YOU WON!");
			false;
		} else {
			return true;
		}
	}

	GameApp.changeHeroHealth = function() {
		var healthPercent = Math.round((GameApp.hero.health / GameApp.heroHealth) * 100);
		console.log(healthPercent);
		$('.health-green.hero').css({'width': ''+healthPercent+'%'})
	}

	GameApp.changeVillainHealth = function() {
		var healthPercent = Math.round((GameApp.villain.health / GameApp.villainHealth) * 100);
		console.log(healthPercent);
		$('.health-green.villain').css({'width': ''+healthPercent+'%'})
	}

})();
