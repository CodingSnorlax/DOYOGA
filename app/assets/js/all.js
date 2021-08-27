

// Initialize Swiper

      // var swiper = new Swiper(".mySwiper", {
      //   slidesPerView: 1,
      //   centeredSlides: true,
      //   spaceBetween: 30,
        
      // });

      var swiper = new Swiper(".courseSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",

        breakpoints: {
        992:{
          slidesPerView: 1.5,
          slidesPerColumn: 1,
        },
      }
      });