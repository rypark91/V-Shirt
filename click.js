$(function(){
    $("a").on('click', function() {
  
      if (this.hash !== "") {

  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });

/**
 * Source Sited:
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery
 */