$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav,.header__sign,.plus').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
});
$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		

	});
})