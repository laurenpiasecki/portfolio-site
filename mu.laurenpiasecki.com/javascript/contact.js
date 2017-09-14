window.onload = function(){
	var contactUs = document.forms.contact_form;
	contactUs.onsubmit = processForm;
	

function processForm(){
	
		if(contactUs.f_name.value === "" || contactUs.f_name.value === null){
			contactUs.f_name.focus();
			contactUs.f_name.style.background = "#e0e1e3";
			return false;
}
		if(contactUs.f_phone.value === "" || contactUs.f_phone.value === null){
			contactUs.f_phone.focus();
			contactUs.f_phone.style.background = "#e0e1e3";
			return false;
}		
		if(contactUs.f_email.value === "" || contactUs.f_email.value === null){
			contactUs.f_email.focus();
			contactUs.f_email.style.background = "#e0e1e3";
			return false;
}
		if(contactUs.message.value === "" || contactUs.message.value === null){
			contactUs.message.focus();
			contactUs.message.style.background = "#e0e1e3";
			return false;
}	
		contactUs.style.display = "none";
		var thanksMsg = document.getElementById("thanks_msg");
		thanksMsg.innerHTML = "Thank you for message. We will get back to you as soon as we can.";
		return false;
}		
}