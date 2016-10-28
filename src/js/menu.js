$(function()
{
	//controle da animação do icone do menu
	$('#nav-icon3').on(
		'click',
 		function(){
			$(this).toggleClass('open');
			$('#menu').toggleClass('hide');
		}
	);

	$('#menu .wrapper a').on(
		'click',
		function()
		{
			$('#menu').addClass('hide');
			$('#nav-icon3').removeClass('open');
		}
	);
})