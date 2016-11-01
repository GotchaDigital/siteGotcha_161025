$(function()
{
	//Resize functions/controll
	$(window).resize(function()
	{
		// Controla o tamanho do banner
		$('#banner').css('height', $(window).height());

		// Centraliza os links do menu no meio da tela
		var aux = $(window).height() - $('#menu .wrapper').height() - 105;
		$('#menu .wrapper').css({marginTop:aux/2});

		// controla a posição do menu
		var rt = ( $(window).width() - ( $('#header .menu-icon').offset().left + $('#header .menu-icon').outerWidth() ) );
		$('#float-menu').css('right', rt - 30 );
	});
	$(window).resize();

	// Anchor smooth scroll
	$('a[href*="#"]:not([href="#"])').on(
		'click',
		function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		}
	);

	// visibilidade do menu
	$(document).scroll(function()
	{
		if($(document).scrollTop() > 350)
		{
			$('#header .logo').addClass('hide');
			$('#float-menu').removeClass('hide');
		}
		else
		{
			$('#header .logo').removeClass('hide');
			$('#float-menu').addClass('hide');
		}
	});
});
