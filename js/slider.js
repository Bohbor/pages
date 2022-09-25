'use strict'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 640px
        1260: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});