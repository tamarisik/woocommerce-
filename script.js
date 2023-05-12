$(document).ready(function() {
	var currentSlide = 1;
	var slideCount = $('.slider-wrapper img').length;
	var slideWidth = $('.slider-wrapper').width() / 3;
	
	$('.slider-wrapper').css('width', slideCount * 100 + '%');
	$('.slider-wrapper img').css('width', slideWidth + 'px');
	
	function slideNext() {
	  currentSlide++;
	  if (currentSlide > slideCount) {
		currentSlide = 1;
		$('.slider-wrapper').css('left', 0);
	  } else {
		$('.slider-wrapper').animate({left: '-=' + slideWidth}, 500);
	  }
	}
	
	setInterval(slideNext, 3000);
  });
  