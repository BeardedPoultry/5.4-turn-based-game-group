window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	$(document).on('click', 'img', function(e) {
		var target = e.target;
		GameApp.vent.trigger('hero:selected', target);
	});

	function GenerateHero(id) {
		this.health = (Math.round(Math.random() * 50) + 50);
		this.attack = function(target) {
			var damage = (Math.round(Math.random() * 10) + 15);
			healthChange(target, damage);
			return damage;
		}
		this.avatar = images[id]();
		this.location = images['location' + randomize()]();
		GameApp.villain = new GenerateVillain();
	}

	function GenerateVillain(id) {
		this.health = (Math.round(Math.random() * 50) + 50);
		this.attack = function(target) {
			var damage = (Math.round(Math.random() * 10) + 15);
			healthChange(target, damage);
			return damage;
		}
		this.avatar = images['villain' + randomize()]();

	}

	function randomize() {
		return Math.floor(Math.random() * 3) + 1;
	}

	var images = {
		'hero1': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'hero2': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'hero3': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'location1': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'location2': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'location3': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'villain1': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'villain2': function () {
			return '../asset/heros/IMG_0278.PNG';
		},
		'villain3': function () {
			return '../asset/heros/IMG_0278.PNG';
		}
	}

	GameApp.hero = new GenerateHero('hero1');

})();