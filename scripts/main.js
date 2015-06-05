(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });
  $(document).ready(function(){
    $('body').prepend(JST['characterselect']());
  });
})();
