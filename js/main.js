$(function (){
  $('.slider-top__inner').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 490,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 755) {
      $('.return-to-top').addClass('return-to-top__active')
    } else {
      $('.return-to-top').removeClass('return-to-top__active')
    };
  });

  $('.return-to-top').on('click', function () {
    $('html, body').animate({scrollTop : 0},800);
  });

  $('.burger').on('click', function () {
    $(this).toggleClass('burger-active');
    $('.menu').toggleClass('menu-active');
  })
});
const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  loop: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});


window.onscroll = function headerFix(){
  var header = document.querySelector('.header');
  var headerBox = document.querySelector('.header__box');
  var contacts = document.querySelector('.header__contacts');

  if (window.pageYOffset > 600) {
    header.classList.add('header-fixed');
  } else{
    header.classList.remove('header-fixed');
  };

  if (window.pageYOffset > 600) {
    headerBox.classList.add('box-fixed');
  } else{
    headerBox.classList.remove('box-fixed');
  };

  if (window.pageYOffset > 600) {
    contacts.classList.add('contacts-active');
  } else {
    contacts.classList.remove('contacts-active');
  };
};

