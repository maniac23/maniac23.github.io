$(document).ready(function() {
// portfolio filter items click
$('#portfolio_grid').mixItUp({
	targetSelector: '.portfolio_item',
	transitionSpeed: 450
});

$(".s_portfolio li").click(function(){
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");
});
$(".portfolio_item").each(function(i){
	$(this).find("a").attr("href", "#work"+i);
	$(this).find(".portfolio_item_description").attr("id", "work"+i);
});
	// popup
	$(".popup").magnificPopup({type: "image"});
	$(".popup_content").magnificPopup({type: "inline"});

	//animation
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".resume_left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".resume_right .resume_item").animated("fadeInRight", "fadeOutRight");

	// подгоняем размер бэкграунда
	function heightDetect(){
		$('.main_head').css('height', $(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});


// menu  toggle
$(".toggle_mnu, .menu_item").click(function() {
	$(".sandwich").toggleClass("active");
	if($(".top_mnu").is(":visible")) {
		$(".top_text").removeClass("h_opacity");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").addClass("h_opacity");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	}
});
$(".top_mnu li a").click(function(){
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});
// smooth scroll to id
$(".top_mnu li a[href*='#']").mPageScroll2id();
$("input, select, textarea").jqBootstrapValidation();



});
$(window).load(function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});