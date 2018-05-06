const $ = require('jquery');

if($('#animate').length){
  var isMobile = false;
  $(document).ready( function() {
      if ($('body').width() <= 768) {
          isMobile = true;
      }
      if (isMobile) {
        console.log('mobile');
      }
      if (!isMobile) {
        var parallaxContainer = document.getElementById('animate'),
        layers = parallaxContainer.children;

        var moveLayers = function (e) {
        var initialX = (window.innerWidth / 2) - e.pageX;
        var initialY = (window.innerHeight / 2) - e.pageY;

        [].slice.call(layers).forEach(function(layer, index) {
          var 
            divider = index / 100,
            positionX = initialX * divider,
            transformString = 'translate(' + positionX + 'px)',
            image = layer.firstElementChild;

          layer.style.transform = transformString;
        });
  };
  window.addEventListener('mousemove', moveLayers);
  }
  });
}