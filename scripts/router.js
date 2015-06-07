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
      $('.application').html(JST['fight-screen']());
      $('.villain-turn').fadeOut();
      GameApp.vent.on('attack', function() {
          GameApp.heroAttack();
        });
      GameApp.vent.on('magic', function() {
        GameApp.heroMagic();
      });
      GameApp.vent.on('use:health-potion', function() {
        GameApp.useHealth();
      });
      GameApp.vent.on('use:bomb', function() {
        GameApp.useBomb();
      });
      GameApp.vent.on('use:double-whammy', function() {
        GameApp.useWhammy();
      });
      // $('html').css('background-image', GameApp.arena);
    }
  });

  GameApp.router = new GameApp.GameRouter();

})();
