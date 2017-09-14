window.onload = function(){
//drag and drop

$("#partydialog").dialog({autoOpen: false});
        $("#ballerinadialog").dialog({
			autoOpen: false});
        $("#santadialog").dialog({autoOpen: false});
    
	var positions = [];
	var partyInitialPosition = $("#party").position();
	$(".hat").draggable();
	$("#party").draggable({
		revert: function() {
			(this).offset(partyInitialPosition);
		}
	});
	
	var crownInitialPosition = $("#crown").position();
	$(".hat").draggable();
	$("#crown").draggable({
		revert: function() {
			(this).offset(crownInitialPosition);
		}
	});
	
	var santaInitialPosition = $("#santa").position();
	$(".hat").draggable();
	$("#santa").draggable({
		revert: function() {
			(this).offset(santaInitialPosition);
		}
	});
	
	
$("#droppable").droppable({drop: function(event, ui){
if (ui.draggable.attr("id") === "party") {
	 $("#partydialog").dialog("open");
	$("#undress").attr("src", "img/daisyClown.png");
	$("#party").position();
	var playhumour = document.getElementById("humour");
	playhumour.play();
	}//party closing
    else if (ui.draggable.attr("id") == "crown"){
	$("#ballerinadialog").dialog("open");
	$("#undress").attr("src", "img/ballerina.png");
	$("#crown").position();
	var playmoves = document.getElementById("moves");
	playmoves.play();
	}//crown closing
	 else if (ui.draggable.attr("id") == "santa"){
	$("#santadialog").dialog("open");
	$("#undress").attr("src", "img/daisySanta.png");
	$("#santa").position();
	var playmrscow = document.getElementById("mrscow");
	playmrscow.play();
	 }//santa closing
	 
	}}); //end droppable 

}//onload closing
