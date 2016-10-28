$(document).ready(function()
{
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