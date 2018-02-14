
function redirect(name){
	window.location.href = name;
}

$(document).ready(function(){
		
	if (!localStorage.getItem("reload")) {

	    localStorage.setItem("reload", "true");
	    location.reload();
	    console.log("1")
	}

	else {
	    localStorage.removeItem("reload");
	    console.log("2")
	}



	$( window ).resize(function() {
		$( "div" ).each(function() {
			if($(this).hasClass('project')){
	  			$(this).height($(this).children().children().height() + 50 );

			}
		});

		if($('body').width() < '920'){
			$(this).css("display", "block");
			/*$('body').css("min-width", "656px");
			$('body').css("width", "100%");
			$('body>.rest').css("padding-left", "1%");
			$('body>.rest').css("width", "95%");*/
			$('body > div.rest').css("padding-left", $('body').width()*.03 + "%");
		}else{
			$(this).css("display", "inline-block");
			/*
			$('body>.rest').css("width", "90%");*/
			$('body > div.rest').css("padding-left", "3%");
			$('body > div.rest').css("padding-right", "1%");
		}
	});

	$( "div" ).each(function() {
		if($(this).hasClass('project')){
	  		$(this).height($(this).children().children().height() + 50 );
		}
		if($('body').width() < '920'){
			$(this).css("display", "block");
			/*$('body').css("min-width", "656px");
			$('body').css("width", "100%");
			$('body>.rest').css("padding-left", "1%");
			$('body>.rest').css("width", "95%");*/
			$('body > div.rest').css("padding-left", $('body').width()*.03 + "%");
		}else{
			$(this).css("display", "inline-block");
			/*
			$('body>.rest').css("width", "90%");*/
			$('body > div.rest').css("padding-left", "3%");
			$('body > div.rest').css("padding-right", "1%");
		}
	});

});