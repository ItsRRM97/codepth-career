
$(document).ready(function()
{
	"use strict";

	var header = $('.header');
	var hamburgerBar = $('.hamburger_bar');
	var hamburger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initVideo();
	initGallery();
	initMenu();


	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
			hamburgerBar.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			hamburgerBar.removeClass('scrolled');
		}
	}


	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			hamburger.on('click', function()
			{
				hamburger.toggleClass('active');
				menu.toggleClass('active');
			});
		}
	}



	function initGallery()
	{
		if($('.gallery_slider').length)
		{
			var gallery = $('.gallery_slider');
			gallery.owlCarousel(
			{
				autoplay:true,
				loop:true,
				smartSpeed:1200,
				nav:false,
				dots:false,
				center:true,
				responsive:
				{
					0:
					{
						items:3
					},
					991:
					{
						items:5
					}
				}
			});
		}
	}

});
