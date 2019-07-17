

$(function() {

  // 'return-to-top' button that appears pat-way down the page on mobile 
    $('#return-to-top').click(scrollToTop);
    window.addEventListener('scroll', scrollThrottler);
  
    var scrollTimeout;
    var isReturnButtonDisplayed = false;
  
    //scroll event throttler to stop the browser from overworking
    function scrollThrottler() {
      // ignore scroll events as long as an checkScroll execution is in the queue
      if (!scrollTimeout) {
          scrollTimeout = setTimeout(function() {
              scrollTimeout = null;
              checkScroll();
              // The checkScroll will execute at a rate of 
          }, 500);
      }
    }
  
    function checkScroll(e) {
      //monitors the scroll position of the page to show 'return-to-top' button
      var scrolls = window.scrollY;
  
      if (scrolls > 1000 && !isReturnButtonDisplayed) {
        // show 'return-to-top-button' and set variable to true
        toggleReturnToTopButton();
      } else if ( scrolls < 1000 && isReturnButtonDisplayed) {
        // hide 'return-to-top' button and set variable to false
        toggleReturnToTopButton();
      }
    }
  
    function toggleReturnToTopButton() {
      if( !isReturnButtonDisplayed ) {
        $('#return-to-top').fadeToggle( 200, 'linear' );
        isReturnButtonDisplayed = true;
      } else {
        $('#return-to-top').fadeToggle( 200, 'linear' );
        isReturnButtonDisplayed = false;
      }
    }
  
  });
  
  function scrollToTop() {
    //scroll to the top of the page with animation
    $('html, body').animate({scrollTop: 0}, 800);
  }