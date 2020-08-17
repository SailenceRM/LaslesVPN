$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav,.header__sign').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
