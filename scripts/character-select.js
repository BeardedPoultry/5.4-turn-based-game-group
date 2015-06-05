window.GameApp = window.GameApp || {};

(function() {
	'use strict';

	$('img').on('click', function(e) {
		var target = e.target;
		GameApp.vent.trigger('hero:selected', target);
	});

})();