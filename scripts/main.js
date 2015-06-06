(function(){
  'use strict';

  // Create an event hub

  $(document).ready(function(){
    GameApp.router = new GameApp.GameRouter();
    Backbone.history.start();
    // fetchMessages();
    // window.setInterval(fetchMessages, 30000);

    $(document).on('click', '.characterSelectButton', function(e) {
    	$('.popup-div').hide();
    });

  });

})();
