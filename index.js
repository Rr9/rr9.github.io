var darkStatus = 0;

$(document).ready(function(){
	//alert( $.cookie("darkTheme") );
	$.cookie("darkTheme", "on");

	var dark = $.cookie("darkTheme");
	if(dark == ""){
		writeDarkCookie(0);
	}else if(dark == "on"){
		darkOn();
		darkStatus = 1;
	}

	console.log(dark);

	$("h1").fadeIn("slow", function(){})

	$("hr").fadeIn("slow", function(){});

	$("h2").fadeIn("slow", function(){});
	$("h2").fadeIn("slow", function(){});

	$("#dark").fadeIn("slow", function(){});

});

function projects(){
	console.log("hre");
    $("#projects").hide();
    $("#subProjects").fadeIn( 400, function(){} );
}

function darkOn(){

	$("body").css("background-color", "#1e1e1e");
	$("h1").css("color", "#eeeeee");
	$("h2").css("color", "#eeeeee");
	$("h3").css("color", "#eeeeee");
	$("hr").css("color", "#eeeeee");

	writeDarkCookie(0);
}

function darkOff(){

	$("main").css("background-color", "#eee");
	$("h1").css("color", "#010101");
	$("h2").css("color", "#010101");
	$("h3").css("color", "#010101");
	$("hr").css("color", "#010101");

	writeDarkCookie(1);
}

function writeDarkCookie(on) {
	if(on == 1){
		$.cookie("darkTheme", "on");
	}else{
		$.cookie("darkTheme", "off");
	}
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}