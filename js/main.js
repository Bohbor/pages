'use strict'
//=================smooth scroll================

$(document).ready(function () {
    $("a").on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
  
        let hash = this.hash;
        $('html').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function () {
          window.location.hash = hash;
        });
      }
    });
  });
  
  
  //==============btn to top=====================
  $(window).on('scroll', showBtn_to_top);
  
  function showBtn_to_top() {
    if (scrollY <= 900) {
      $('.btn_to_top').css('display', 'none')
      return;
    } else (scrollY >= 901)
    $('.btn_to_top').css('display', 'block')
  }