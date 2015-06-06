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

      GameApp.vent.on('hero:selected', function(target) {
        if(!GameApp.heroSelected) {
          $(target).siblings().toggle('visibility');
          $(target).toggleClass('selected');
          GameApp.hero = new GameApp.GenerateHero(target.id);
          GameApp.heroSelected = true;
        }

        // else


        console.log(target);

        // showButton();

      });

    },

    fight: function() {
      $('.application').html(JST['fight-template']());
    }
  });

  GameApp.router = new GameApp.GameRouter();

})();
