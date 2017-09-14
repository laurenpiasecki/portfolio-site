$( function() {
    $( "#datepicker" ).datepicker();
} );

window.onload = function(){
	
	var eventBooking = document.forms.event_form;
	eventBooking.onsubmit = processForm;

function processForm(){
		if(eventBooking.f_date.value === "" || eventBooking.f_date.value === null){
			eventBooking.f_date.focus();
			eventBooking.f_date.style.background = "#e0e1e3";
			return false;
}		
		if(eventBooking.f_time.value === " "){
			eventBooking.f_time.focus();
			eventBooking.f_time.style.background = "#e0e1e3";
			return false;
}			
		if(eventBooking.f_size.value === "" || eventBooking.size.value === null || eventBooking.size.value === NaN){
			eventBooking.f_size.focus();
			eventBooking.f_size.style.background = "#e0e1e3";
			return false;
}
		if(eventBooking.f_name.value === "" || eventBooking.f_name.value === null){
			eventBooking.f_name.focus();
			eventBooking.f_name.style.background = "#e0e1e3";
			return false;
}
		if(eventBooking.f_number.value === "" || eventBooking.f_number.value === null){
			eventBooking.f_number.focus();
			eventBooking.f_number.style.background = "#e0e1e3";
			return false;
}		
		if(eventBooking.f_email.value === "" || eventBooking.f_email.value === null){
			eventBooking.f_email.focus();
			eventBooking.f_email.style.background = "#e0e1e3";
			return false;
}

		eventBooking.style.display = "none";
		var thanksMsg = document.getElementById("thanks_msg");
		thanksMsg.innerHTML = "Thank you for your request. Someone will be in touch with you shortly.";
		return false;
}				
}