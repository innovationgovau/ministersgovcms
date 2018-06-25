
jQuery(document).ready(function($) {
    $('a[href^="https://"]').filter(function() {
            return this.hostname && this.hostname !== location.hostname;
        })


        .addClass("external")
        .attr('title', function() { return this.title + ' - Link will open in new window' })
        .click(function() {
        //    window.open(this.href);
          //  return false;

           var x=window.confirm('You are now leaving the Industry website. The link to the website you are entering may not constitute endorsement by the Commonwealth of Australia. Would you like to continue?');
      var val = false;
      if (x)
        val = true;
      else
        val = false;
      return val;
        });



});
