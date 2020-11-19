var darkStatus = 1;

$(document).ready(function(){
	//alert( $.cookie("darkTheme") );

	var dark = $.cookie("darkTheme");

	if(dark == ""){
		writeDarkCookie(0);
	}else if(dark == "on"){
		darkOn();
		darkStatus = 1;
	}

	$("h1").fadeIn("slow", function(){})

	$("hr").fadeIn("slow", function(){});

	$("h2").fadeIn("slow", function(){});
	$("h2").fadeIn("slow", function(){});

	$("#dark").fadeIn("slow", function(){});

});

function projects(){
    $("#projects").hide();
    $("#subProjects").fadeIn( 400, function(){} );
}

function fadenext(element){
	$(element).next().fadeIn( 400, function(){} );
	// if($(element).next().style.display === "none"){
	// 	console.log("showing");
	// 	$(element).next().fadeIn( 400, function(){} );
	// 	// $(element).children().style.display = "initial";
	// }else if($(element).next().style.display != "none"){
	// 	$(element).next().fadeOut( 400, function(){} );
	// }
}

function fadechildren(element){
	// $(element).hide();
	if($(element).children().style.display == "none"){
		console.log("showing");
		$(element).children().fadeIn( 400, function(){} );
		// $(element).children().style.display = "initial";
	}else if($(element).children().style.display != "none"){
		$(element).children().fadeOut( 400, function(){} );
	}
}


function darkToggle(){
	if(darkStatus==1){
		darkOff();
	}else{
		darkOn();
	}
}

function darkOn(){
	//$("#dark").text("Light");
	$("head link#theme").attr("href", "indexDark.css");
	writeDarkCookie(1);
	darkStatus=1;
}

function darkOff(){
	//$("#dark").text("Dark");
	$("head link#theme").attr("href", "indexLight.css");
	writeDarkCookie(0);
	darkStatus=0;
}

function writeDarkCookie(on) {
	if(on == 1){
		$.cookie("darkTheme", "on");
	}else{
		$.cookie("darkTheme", "off");
	}
}
