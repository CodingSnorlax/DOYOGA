
$(document).ready(function(){

  // 立即預約頁面

  $('.arrow').hide();
  $('.selectCourseText').hide();
  $('.continueBtn').hide();
  $('.courseCollapse').hide();

  $('.expCard').on('click', function(){   // 體驗課程卡片點選後

    const selectedCourseTrial = $(this).attr('data-name');
    $('.selectCourseText').toggleClass('d-block');
    $('.selectCourseTrial').text(selectedCourseTrial);
    $('.continueBtn').show();
    
    $('.expCard').removeClass('border-4 arrow collapse').toggleClass('d-none d-lg-block');
    
    $(this).toggleClass('border-4 arrow collapse');

    $(this).removeClass('d-none d-lg-block').addClass('d-block');
    
    
  });

  // $('.firstExpBtn').on('click', function(){
  //   $('.shortExpCard').toggleClass('d-none d-lg-block');
  //   $('.longExpCard').toggleClass('d-none d-lg-block');
  //   $('.firstExpCard').toggleClass('border-4');
  //   $('.arrow').toggleClass('d-block');
  //   $('.selectCourseText').toggleClass('d-block');
  //   $('.continueBtn').show();
  // });

  $('.courseLevel__card').on('click', function(){

    const selectedCourseType = $(this).attr('data-name');

    $('.courseLevel__card').removeClass('border border-4 border-light');
    $('.courseLevel__card').find('.bi-check-circle').removeClass('opacity-100');

    $(this).addClass('border border-4 border-light');
    $(this).find('.bi-check-circle').addClass('opacity-100');

    $('.selectCourseType').text(selectedCourseType);

  });
  

      // 課程階級 swiper
      var swiper = new Swiper(".courseLevelSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        grid: {
          rows: 3,
          fill: 'row',
        },

        breakpoints: {
        768:{
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        992:{
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      }
      });
  
     
     // 課程的swiper
      var swiper = new Swiper(".courseSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",

        breakpoints: {
        992:{
          slidesPerView: 1.4,
          slidesPerColumn: 1,
        },
      }
      });

      // 聽聽他們怎麼說 swiper
      var swiper = new Swiper(".feedbackSwiper", {

        spaceBetween: 0,
        slidesPerView: 1,
        grid: {
          rows: 3,
          fill: 'row',
        },
        
        breakpoints: {
          768:{
            spaceBetween: 30,
            slidesPerView: 2.2,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },

          992:{
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        },

        navigation: {
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        },
        
      });

      // 課程推薦 swiper 
      var swiper = new Swiper(".recommendSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        breakpoints: {
        768:{
          slidesPerView: 2,
        },
        992:{
          slidesPerView: 3,
        },
        1024:{
          slidesPerView: 4,
        },
      }
      });

      // 師資介紹 swiper
      var swiper = new Swiper(".teacherSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerColumn: 4,
        slidesPerColumnFill: "row",

        breakpoints: {
        768:{
          slidesPerView: 2.15,
          slidesPerColumn: 1,
          slidesPerColumnFill: "row",
        },
        992:{
          slidesPerView: 3.3,
          slidesPerColumn: 1,
          slidesPerColumnFill: "row",
        },
      }
      });

      // datepicker
      const elem = document.querySelector('input[name="datepicker"]');
      const datepicker = new Datepicker(elem, {
      nextArrow: '>',
      prevArrow: '<',
      buttonClass: 'btn datepicker-primary',
      autohide: true,
      clearBtn: true,
      // format: 'mm/dd/yyyy',
    }); 

  });

