$(document).ready(function(){
    
    $('.slider__list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1700,
        arrow: true,
        fade: true,
        cssEase: 'linear'
      });
      
    $(".burger-wrap").click(function () {
        $(".header__navigation").toggleClass("header__navigation--open");
        $(".burger").toggleClass('burger--close');
    });
    $(".main__sidebar-burger-wrap").click(function () {
        $(".main__sidebar-wrap").toggleClass("main__sidebar-wrap--open");
        $(".main__sidebar-burger").toggleClass('main__sidebar-burger--open');
    });
    $('.tab__list [data-tab]').on('click', function () {
        var $this = $(this);
        var $name = $this.data('tab');
        var $id = $this.closest('.tab__list').data('tab-id');
        var $idEl = $('.tab__body[data-tab-id="' + $id + '"]');

        $this.closest('.tab__list').find('[data-tab]').removeClass('active');
        $this.addClass('active');
        $idEl.find('[data-tab]').hide();
        $idEl.find('[data-tab="' + $name + '"]').show();
        $(window).trigger('resize').trigger('scroll');
    });
});


$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: false,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.portfolio__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1250,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: false
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-navV'
  });
  $('.slider-navV').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

let openr = document.querySelectorAll('.main__heading-item');
let openS = document.querySelectorAll('.main__heading-answer');

openr.forEach((item, index) => {
    item.addEventListener('click', () => {
        openS[index].classList.toggle('main__heading-answer--open');
    })
})


document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('active');
  });
  
  document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
        
      });
    });
  });