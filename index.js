$(document).ready(function(){
	$("h1").fadeIn("slow", function(){}).queue();

	$("hr").fadeIn("slow", function(){});

	$("h2").fadeIn("slow", function(){});
	$("h2").fadeIn("slow", function(){});

});

function projects(){
	console.log("hre");
    $("#projects").hide();
    $("#subProjects").fadeIn( 400, function(){} );
}