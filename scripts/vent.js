window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	GameApp.vent = _.extend({}, Backbone.Events);

	// GameApp.vent.on('data:messages:sync', function(messages) {
  	//   $('.messages-list').html(JST['messages'](messages));
  	// });

	GameApp.vent.on('game:start', function() {
		// fire a function for clearing current template
		// fire a function for loading fight template
			// display hero and villain stats generated above
			// display new background
			$('.hero-img img').attr("src", GameApp.hero.avatar);
			$('.villain-img img').attr("src", GameApp.villain.avatar);
			// display instructions

	});

	GameApp.vent.on('attack:', function(){
		// accesses method for attack on hero/villain object
			// method = function(target) {
			// 	var damage = (Math.round(Math.random() * 10) + 15);
			//  healthChange(target, damage);
			// 	return damage;
			// }
			// value of damage subtracted from health bar div's %width
			// displays subtacted amount above characters img
		// initiates setTimeout for attack
		//
	});

	

})();