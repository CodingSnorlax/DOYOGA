"use strict";

// 課程的swiper
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  breakpoints: {
    992: {
      slidesPerView: 1.4,
      slidesPerColumn: 1
    }
  }
}); // 聽聽他們怎麼說 swiper

var swiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerColumn: 3,
  slidesPerColumnFill: "row",
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      slidesPerColumn: 2
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2
    }
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  }
}); // 課程推薦 swiper 

var swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
}); // 師資介紹 swiper

var swiper = new Swiper(".teacherSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerColumn: 4,
  slidesPerColumnFill: "row",
  breakpoints: {
    768: {
      slidesPerView: 2.15,
      slidesPerColumn: 1,
      slidesPerColumnFill: "row"
    },
    992: {
      slidesPerView: 3.3,
      slidesPerColumn: 1,
      slidesPerColumnFill: "row"
    }
  }
}); // datepicker

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn datepicker-primary',
  autohide: true,
  clearBtn: true // format: 'mm/dd/yyyy',

});
//# sourceMappingURL=all.js.map
