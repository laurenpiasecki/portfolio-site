$( document ).ready(function () {
	     
$( function() {
$( "#accordion" ).accordion();
});//accordion function close
$( ".selector").accordion();

$.datepicker.setDefaults( $.datepicker.regional["en"] );
$("#datepicker").datepicker();

var formHandle = document.forms.applyForm;
formHandle.onsubmit = processForm;

function processForm() {
			
var yourDate = document.getElementById("datepicker");

if (yourDate.value === "" || yourDate.value === null){
	yourDate.style.background = "#e0e1e3";
	yourDate.focus();
	return false;}
	
	
var yourName = document.getElementById("formName");

if (yourName.value === "" || yourName.value === null){
	yourName.style.background = "#e0e1e3";
	yourName.focus();
	return false;}

var yourEmail = document.getElementById("formemail");

if (yourEmail.value === "" || yourEmail.value === null){
	yourEmail.style.background = "#e0e1e3";
	yourEmail.focus();
	return false;}

var yourPhone = document.getElementById("formphone");
	
if (yourPhone.value === "" || yourphone.value === null){
	yourPhone.style.background = "#e0e1e3";
	yourPhone.focus();
	return false;}
			
} //processForm close

}); //ready function close
