(function(){
  'use strict';

  // Create an event hub

  $(document).ready(function(){
    GameApp.router = new GameApp.GameRouter();
    Backbone.history.start();
    // fetchMessages();
    // window.setInterval(fetchMessages, 30000);

    $('img').on('click', function(e) {
		var target = e.target;
		GameApp.vent.trigger('hero:selected', target);
	});

  });

})();
