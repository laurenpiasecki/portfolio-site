window.onload = pageLoaded; 

function pageLoaded () {

$("#map").hide(); 
var $slider = $("#slider"); 
var $sliderContainer = $slider.find('.slides');
var $slides = $sliderContainer.find('.slide');
var currentSlide = 1; 

$("#directions").click(

function(){$('#map').slideToggle(3000);},
function(){$('#map').slideToggle(2000);}

);

var dateVar = new Date();
var timeCheckMorn = new Date(); 
timeCheckMorn.setHours(12, 00, 00); 
var timeCheckEve = new Date(); 
timeCheckEve.setHours(22, 00, 00); 
console.log(dateVar);
console.log(timeCheckMorn);
console.log(timeCheckEve);

if(dateVar < timeCheckMorn || dateVar > timeCheckEve){
 

 var timeMsg = document.getElementById("timeBox"); 
 timeMsg.innerHTML= "Sorry, we are closed."; 
	
}else{


var timeMsg = document.getElementById("timeBox"); 
 timeMsg.innerHTML= "We are open!"; 

}


var interval; 


function startSlider(){
 interval = setInterval(function() {


$sliderContainer.animate({"margin-left": "-=720"}, 1000,  function() {


	currentSlide++; 
	if (currentSlide === $slides.length){
		currentSlide = 1; 
		$sliderContainer.css('margin-left', 0);

	}
});

},5000);

}

function pauseSlider() {
	clearInterval(interval);
}

$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider); 

startSlider(); 

}

