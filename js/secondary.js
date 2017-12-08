$('form').submit(function(e) {
		e.preventDefault(e);
})

$('select').ready(function() {
	var select = document.querySelector("select");
	select.addEventListener("change", function() {
  	var number = 0;
  	for (var i = 0; i < select.options.length; i++) {
    	var option = select.options[i];
    	if (option.selected)
      	number += Number(option.value);
    	}
  	console.log('select: ',number);
	});
})

$('select[multiple]').ready(function() {
	var select = document.querySelector("select[multiple]");
	select.addEventListener("change", function() {
  	var number = 0;
  	for (var i = 0; i < select.options.length; i++) {
    	var option = select.options[i];
    	if (option.selected)
console.log('select[multiple]: ',Number(option.value));    	}
  	
	});
})

$('input').ready(function() {
	$('input').keypress( function(eventObject){
  		console.log('keypress keyCode =',eventObject.which);
	});
	var text = document.querySelector("input");
  	text.addEventListener("change", function() {
  		console.log('input: ',text.value);
  	});
})

$('textarea').ready(function() {
	$('textarea').keypress( function(eventObject){
  		console.log('keypress keyCode =',eventObject.which);
	});
	var text = document.querySelector("textarea");
  	text.addEventListener("change", function() {
  		console.log('textarea: ',text.value);
  	});
})

$('input[name="inlineRadioOptions"]').ready(function() {
	for (var i=0;i<$('input[name="inlineRadioOptions"]').length;i++){
    $('input[name="inlineRadioOptions"]')[i].addEventListener('click', function(event) {
         console.log('first-radios: ',this.value);
    });
}
})

$('input[name="exampleRadios"]').ready(function() {
	for (var i=0;i<$('input[name="exampleRadios"]').length;i++){
    $('input[name="exampleRadios"]')[i].addEventListener('click', function(event) {
         console.log('second-radios: ',this.value);
    });
}
})

$('input[name="first-checkbox"]').ready(function() {
	for (var i=0;i<$('input[name="first-checkbox"]').length;i++){
    $('input[name="first-checkbox"]')[i].addEventListener('click', function(event) {
         console.log('first-checkbox: ',this.value);
    });
}
})

$('input[name="second-checkbox"]').ready(function() {
	for (var i=0;i<$('input[name="second-checkbox"]').length;i++){
    $('input[name="second-checkbox"]')[i].addEventListener('click', function(event) {
         console.log('second-checkbox: ',this.value);
    });
}
})

$('button').on('click', function() {
	console.log('input:',$('input').val(	));
	console.log('textarea:',$('textarea').val(	));
	console.log('select:',$('select').val(	));
})