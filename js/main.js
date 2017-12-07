$('.add-class').on('click', function() {
	$('.add-class').addClass('btn-primary');
});

$('.remove-class').on('click', function() {
	$('.remove-class').removeClass('btn-primary');
});

$('.toggle-class').click(function() {
	$(this).toggleClass('btn-warning');
})

$('.getattr-class').click(function() {
	$(this).attr('class');
})

$('.setattr-class').on('click', function() {
	$(this).attr('id', 'highlight');
})

$('.alert-class').on('click', function() {
	$('.wrap').show();
})

$('#close-popup').on('click', function () {
	$('.wrap').hide();
})

$('.clone-class').on('click', function() {
	var text = '(cloned)';
	$(this).clone().insertAfter(this);
	$(this).append(text);
})

$('.closest-el').on('click', function() {
	console.log($(this).parent());
})

$('.text-btn').on('click', function () {
	BtnText = [];
	$('button').each( function(i) {
		BtnText.push($(this).text());
	})
	for (var i = 0; i < BtnText.length; i++) {
		console.log(BtnText[i]);
	}
})

$('.find-class').on('click', function() {
	$('body').find($('.find-class'));
	console.log('the button was found');
})

$('.fade-in-class').on('click', function() {
	$('.text-fade-in').fadeIn('slow');
})

$('.fade-out-class').on('click', function() {
	$('.text-fade-out').fadeOut('slow');
})

$('.hide-class').on('click', function() {
	$('.text-hide-class').hide('slow', function(){

	})
})

$('.show-class').on('click', function() {
	$('.text-show-class').show('slow', function(){

	})
})

$(".data-class").on('click', function () {
	var height = "height: " + $(this).outerHeight() + "px,";
	var width = "width: " + $(this).outerWidth() + "px,";
	var offsetTop = "top: " + $(this).offset().top + "px,";
	var offsetLeft = "left: " + $(this).offset().left + "px,";
	var attrId = "id: " + $(this).attr("id") + ",";
	var attrClass = "class: " + $(this).attr("class") + ",";
	var parent = $(this).parent();
	var text = "text: " + $(this).text() + ",";
	var prev = $(this).prev();
	var next = $(this).next();

	console.log(height, width, offsetTop, offsetLeft, attrId, attrClass, text, parent, prev, next);
});



