jQuery(document).ready(function(){

//Staff
$(".text_staff").hide();
$("#sHover").hide();

   $("#staff").hover(function(){
   $("#staff").hide();
    $("#sHover").show();

});
 $("#sHover").mouseout(function(){
 	$("#staff").show();
 	$("#sHover").hide();
    	
});

$("#sHover").click(function(){
    $(".text_staff").toggle();
    
});

//Produce
$(".text_produce").hide();
$("#pHover").hide();

   $("#produce").hover(function(){
   $("#produce").hide();
    $("#pHover").show();

});

 $("#pHover").mouseout(function(){
 	$("#produce").show();
 	$("#pHover").hide();
    	
});

$("#pHover").click(function(){
    $(".text_produce").toggle();
});




//Dinning
$(".text_D").hide();
$("#dHover").hide();

   $("#dinning").hover(function(){
   $("#dinning").hide();
    $("#dHover").show();

});
 $("#dHover").mouseout(function(){
 	$("#dinning").show();
 	$("#dHover").hide();
    	
});

$("#dHover").click(function(){
    $(".text_D").toggle();
});

});