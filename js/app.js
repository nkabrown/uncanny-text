$(document).ready(function() { 
	$("#input").on('keyup', function(e) {
		$(this).val();
		var text = $(this).val();
		console.log(text); 
			$("#output").html(text);
	
			/*var value = String.fromCharCode(e.charCode);
	
			function mix (text) {
				if(e.charCode >= 65 && e.charCode <= 122){
					$("#output").css({
						"color": "#e32636"
					});
				}

				else if(e.charCode >= 48 && e.charCode <= 57) {
					$("#output").css({
						"color": "#87A96B"
					});
				}
			};

			mix();*/
	});

	$("#output").on('click', function() {
		$("#output").fadeOut(50000);
	});
	
	

			/*$(function(){
				$("#output").on('click')
			})*/


			//$("#output").append("<span id='new'>"+text+"</span>");

			//var uncanny = $("#output").append("<span id='new'>"+text+"</span>");
				
			
			/*function erase(text) {
					var removeSpan = document.getElementById("new");
					var containerDiv = removeSpan.parentNode;
					containderDiv.removeChild(removeSpan);
					
					//$("#new").fadeOut(1000);
					//$("#new").remove();			
			};

			
			erase();	
			/*create a <span> that surronds each letter and give the <span> a class that with a function
			that animates each letter*/

			/*var uncannyText = document.getElementById('uncanny')			

			uncannyText.value
				
				function erase(text) {
					$(".active").fadeOut(5000);
				}

				erase();

    		//give the text variable a class so I can fetch it.
    		// write a function that fades the class out


    		/*var string = text;
    		var q = jQuery.map(string.split(''), function (letter) {
        		return $('<span>' + letter + '</span>');
   			 });

    		var dest = $("#output");

    		var c = 0;
    		var i = setInterval(function () {
        		q[c].appendTo(dest).hide().fadeOut(5000);
        		c += 1;
        		if (c >= q.length) clearInterval(i);
    			}, 1000);*/
			//think about how I want the text to be transformed...fadeIn, upside down,
	//});


});