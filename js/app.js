$(document).ready(function() {
	$("#input").on('keyup', function(e) {
		console.log(e);
		$(this).val();
		var text = $(this).val();
		console.log(text); 
			$("#output").html(text);
			//think about how I want the text to be transformed...fadeIn, upside down,
	})


});