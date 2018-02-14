$(document).ready(function(){
  $("#quickaccess").click(function(){
	  if ($("#textquickaccess").is(':visible')) {
		  	$("#textquickaccess").fadeOut('fast');
			$("#inputquickaccess").delay('fast').fadeIn('fast');
		  }else if ($("#inputquickaccess").is(':visible')){
			$("#inputquickaccess").fadeOut('fast');
		  	$("#textquickaccess").delay('fast').fadeIn('fast');
			  }
  });
});