$(document).ready(function()
{
	//controle da animação do icone do menu
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('#menu').toggleClass('hide');
	});

	// controle de ação do mapa (liga e desliga o scroll do maps)
	$('#contact .map').on(
		'click',
		function()
		{
			$('#contact .map iframe').css('pointer-events','auto');
		}
	);
	$('#contact .map').on(
		'mouseleave',
		function()
		{
			$('#contact .map iframe').css('pointer-events','none');
		}
	);

	$(window).resize(function()
	{
		$('#banner').css('height', $(window).height());
		var aux = $(window).height() - $('#menu .wrapper').height() - 105;
		$('#menu .wrapper').css({marginTop:aux/2});
	});
	$(window).resize();

	$('.g2').hide();
	$('.g3').hide();
	$('.g4').hide();
	var num = 1;
	var num2 = 2;
	setInterval(function(){
		$('.g'+num).fadeOut(700);
		$('.g'+num2).fadeIn(700);
		num = num2;	num2= num2+1;
		if (num2==5) { num2=1; }
	},2500);
});