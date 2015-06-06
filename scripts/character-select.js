window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	$(document).on('click', 'img', function(e) {
		var target = e.target;
		GameApp.vent.trigger('hero:selected', target);
	});

	GameApp.GenerateHero = function GenerateHero(id) {
		this.health = (Math.round(Math.random() * 50) + 50);
		this.attack = function(target) {
			var damage = (Math.round(Math.random() * 10) + 15);
			healthChange(target, damage);
			return damage;
		}
		this.avatar = images[id]();
		GameApp.arena = images['arena' + randomize()]();
		GameApp.villain = new GenerateVillain();
	}

	function GenerateVillain() {
		this.health = (Math.round(Math.random() * 50) + 50);
		this.attack = function(target) {
			var damage = (Math.round(Math.random() * 10) + 15);
			healthChange(target, damage);
			return damage;
		}
		this.avatar = images['villain' + randomize()]();

	}

	function healthChange(target, damage) {
		target.health -= damage;
		return target.health;
	}

	function randomize() {
		return Math.floor(Math.random() * 3) + 1;
	}

	var images = {
		'hero1': function () {
			return '../asset/heros/hero1.png';
		},
		'hero2': function () {
			return '../asset/heros/hero2.png';
		},
		'hero3': function () {
			return '../asset/heros/hero3.png';
		},
		'arena1': function () {
			return '../asset/locations/arena1.jpg';
		},
		'arena2': function () {
			return '../asset/locations/arena2.jpg';
		},
		'arena3': function () {
			return '../asset/locations/arena3.jpg';
		},
		'villain1': function () {
			return '../asset/villain/villain1.png';
		},
		'villain2': function () {
			return '../asset/villain/villain2.png';
		},
		'villain3': function () {
			return '../asset/villain/villain3.png';
		}
	}

	// GameApp.hero = new GenerateHero('hero1');

})();