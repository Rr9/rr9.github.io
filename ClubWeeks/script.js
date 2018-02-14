var inform = 0;
var weeks = 6;
var current= 0;
var kids = 0

$(document).ready(function(){

	document.getElementById("kids").value = "1";

	$(".options>label").hover(function(){inform = 1;}, function(){inform = 0;})

	$(".weeks").click(function(){
		if (inform == 0){
			if($(this).find(".options > .checkmark").css("background-color")=="rgb(255, 255, 255)"){
				$(this).find(".options > .checkmark").css("background", "#8BC34A");
				$(this).find(".options").css("right", "0px");
				$(this).css("background", "#CFD8DC");
				$(this).children("p").css("font-weight", "700");
			}else{
				$(this).find(".options > .checkmark").css("background", "#FFF");
				$(this).find(".options").css("right", "-380px")
				$(this).css("background", "#ECEFF1")
				$(this).find("input[value='Null']").prop('checked', true);
				$(this).children("p").css("font-weight", "500");
			}
		}
	});


});


function writeValue(x){
	document.getElementById("kidsline").innerHTML="Signing up " + x+  " members"
	document.getElementById("chooseKids").innerHTML="";
	var choose ="";

	for (var i = 0; i < x; i++) {
		choose += "<div class='choose' id='" + i + "' onclick='displayWeeks("+i+")'>"+(i+1)+"</div>";
	};

	document.getElementById("chooseKids").innerHTML=choose;
	kids = x;
}


function displayWeeks(x){
	current = x;
	var changeCol = "#" + x

	if(kids==1){
		$(changeCol).css("background-color", "#8BC34A")
	}else{
		$(".choose").css("background-color", "#78909C")
		$(changeCol).css("background-color", "#8BC34A")
	}
}

function updateSelection(x,y){
	document.getElementById("kidsline").innerHTML="Signing up " + x+  " members";
}