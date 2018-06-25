(function ($) {
  Drupal.behaviors.ministers2016smoothScroll = {
    attach: function (context, settings) {
      $('.l-page a[href*="#"]', context).once('smoothScroll', function() {
        $(this).on('click', function(e) {
          e.preventDefault();
          var target = e.currentTarget.href.split('#');
          if(target[1] !== "") {
            var targetHash = '#' + target[1];
            var targetURL = target[0];
            var srcURL = $(location);
            if((srcURL[0].origin + srcURL[0].pathname) == targetURL) {
              if(typeof $(targetHash).offset().top !== "undefined") {
                $('html, body').animate({
                  scrollTop: $(targetHash).offset().top - 32
                }, 500, 'swing');
              }
            } 
          }
        });
      });
    }
  };
  Drupal.behaviors.ministers2016widowFix = {
    attach: function (context, settings) {
      $('h1, h2, h3, h4, h5', context).once('widow-fix', function() {
        $(this).widowFix();
      });
    }
  }

  
})(jQuery);

