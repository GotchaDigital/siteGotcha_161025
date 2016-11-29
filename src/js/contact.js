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

    $('#contact .map iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2492624126958!2d-46.687673649261676!3d-23.595391868660172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574f4a1763db%3A0xdb4801501d7db420!2sR.+Olimp%C3%ADadas%2C+200+-+Itaim+Bibi%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1477499422984');

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