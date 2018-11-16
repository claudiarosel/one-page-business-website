



$(document).ready(function(){

  //MENU
  $(".menu img").click(function() {
    $('.menu').toggleClass('abierto');
  });

  var header = $('.inicio');
  var range = 80;

  $(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 1.5,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });

    if (calc > '1') {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }

  });

  $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  autoplay: true,
  autoplaySpeed: 3500,
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  adaptiveHeight: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3500,


  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
    }
    }]
});

$('#nav').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
  begin: function() {
    //I get fired when the animation is starting
  },
  end: function() {
    //I get fired when the animation is ending
  },
  scrollChange: function($currentListItem) {
    //I get fired when you enter a section and I pass the list item of the section
  }
});



});
