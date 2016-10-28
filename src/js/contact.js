$(function()
{
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
});