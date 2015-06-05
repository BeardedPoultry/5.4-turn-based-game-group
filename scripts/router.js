// create global variable if doesn't already exist
window.GameApp = window.GameApp || {};

(function(){

  GameApp.GameRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'fight': 'fight'
    },

    index: function(){
      $('.application').html(JST['characterselect']());
    },

    fight: function() {
      $('.application').html(JST['fight-template']());
    }
  });

  GameApp.router = new GameApp.GameRouter();

})();