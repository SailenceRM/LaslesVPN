$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav,.header__sign,.plus').toggleClass('active');
		$('body').toggleClass('lock');
		$('.registration').removeClass('regactive');
	});
	
});
$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		

	});
})
$(document).ready(function(){
	$('.header__signup').click(function(event){
		$('.registration').addClass('regactive');
	});
	$('.header__nav-item').click(function(event){
		$('.header__burger,.header__nav,.header__sign,.plus').removeClass('active');
		$('body').removeClass('lock');
	})
})

$(document).ready(function(){
	$('.registration__end').click(function(event){
		$('.registration').removeClass('regactive');
	});
})

