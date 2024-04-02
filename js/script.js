// jq
$(document).ready(function(){
	
	$('.wrapper').slick({
	infinite: true,
	slidesToShow: 4,
  	slidesToScroll: 1,
  	speed: 400,
  	// arrows: true,
  	autoplay: true,
  	autoplaySpeed: 2000,

responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
	});
  	
  	

$('.hello').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



	});


