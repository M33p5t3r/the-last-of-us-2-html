
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 7000
  });

  $(".navbar-toggler").click(function(){
    $(".navbar-toggler-icon").toggleClass("close--icon")
    $(".navbar-collapse").toggleClass("show")
  });




/* Home Carousel Counter */

var totalItems = $('.carousel-item').length;
var currentIndex = $('carousel-item.active').index() + 1;

$('#carousel').on('slid.bs.carousel', function() {
    currentIndex = $('carousel-item.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
});

var totalItemsPop = $('.carousel-item').length;
$('#carousel').on('slide.bs.carousel', function() {
       setTimeout(function(){ 
            currentIndexPop = $('#carousel .carousel-item.active').index() + 1;
            $('.num').html('' + currentIndexPop + '/' + totalItemsPop + '');
         }, 1000);
});

// Pop up Video Wrap 

( function() {
	
	'use strict';

	var bodyEl = document.body,
		videoWrap = document.querySelector('.video-wrap'),
    gamevideoWrap = document.querySelector('.gameplay-video-wrap'),
		videoEl = videoWrap.querySelector('video'),
    gameplayvideoEl = gamevideoWrap.querySelector('video'),
		playCtrl = document.querySelector('.action--play'),
    playDemoCtrl = document.querySelector('.gameplay-demo--play'),
		closeCtrl = document.querySelector('.action--close'),
    closeDemoCtrl = document.querySelector('.demo-action-close');

	function init() {
		initEvents();
	}

	function initEvents() { 
		playCtrl.addEventListener('click', play);
    playDemoCtrl.addEventListener('click', playdemo);
		closeCtrl.addEventListener('click', hide);
		closeDemoCtrl.addEventListener('click', hideDemo);
    videoEl.addEventListener('canplaythrough', allowPlay);
		videoEl.addEventListener('ended', hide);
	}

	function allowPlay() {
		classie.add(bodyEl, 'video-loaded');
	}

	function play() {
		videoEl.currentTime = 0;
		classie.remove(videoWrap, 'video-wrap--hide');
		classie.add(videoWrap, 'video-wrap--show');
		setTimeout(function() {videoEl.play();}, 600);
	}

  function playdemo() {
    gameplayvideoEl.currentTime = 0;
    classie.remove(gamevideoWrap, 'video-wrap--hide');
		classie.add(gamevideoWrap, 'video-wrap--show');
		setTimeout(function() {gameplayvideoEl.play()}, 600);
	}

	function hide() {
		classie.remove(videoWrap, 'video-wrap--show');
		classie.add(videoWrap, 'video-wrap--hide');
		videoEl.pause();
	}

  function hideDemo() {
    classie.remove(gamevideoWrap, 'video-wrap--show');
		classie.add(gamevideoWrap, 'video-wrap--hide');
    gameplayvideoEl.pause();
  }

	init();

})();

});
