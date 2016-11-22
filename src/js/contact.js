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

    // FORMULARIO
    $('#contact form').submit(function()
    {
        $('#contact form').slideUp();

        var formData = $(this).serialize();
        console.log(formData);
        $.ajax(
        {
            method: 'post',
            url: '/functions/save_form.php',
            data: formData,
            success: function(data)
            {
                console.log(data);

                if ( data == 'Ok' )
                {
                    $('#contact .success').slideDown();
                }
            }
        });
        return false;
    });


});