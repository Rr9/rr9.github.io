
function redirect(name){
	window.location.href = name;
}

$(document).ready(function(){
	$( "div" ).each(function() {
		if($(this).hasClass('project')){
	  		$(this).height($(this).children().children().height() + 50 );
		}
	});
});