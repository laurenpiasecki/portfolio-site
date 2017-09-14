

jQuery(document).ready(function(){

var formHandle = document.forms[0]; 
/****CHOOSE YOUR CARDS SECTION**********/

$("#personalize").hide();
$("#remove-card").hide();
var flag = false;
$("#yes").click(function(){
    flag = true;
	$("#personalize").show(); 
	var pTo = $("#toname").val(); 
			var pFrom = $("#fromname").val();
		 	var pMessage = $("#cardmessage").val(); 
			console.log(pTo);
			console.log(pFrom);
			console.log(pMessage); 
		 	$("#to").html("To: "+ pTo); 
		 	$("#from").html("From: " + pFrom); 
		 	$("#message").html("Message: " + pMessage); 

});


$("#no").click(function(){
    flag = false;
	$("#personalize").hide(); 

});



/***********SHIPPING************/

$(".ship-info").hide(); 
$(".email").hide(); 
$("#printText").hide(); 


$("#shipping_method").change(function(){


var shipOption = $("#shipping_method").val();

if (shipOption === "0.00") {
	$("#printText").show(); 
	$(".email").show(); 
	$(".ship-info").hide();

} else if (shipOption === "") {
	$(".ship-info").hide(); 
	$(".email").hide(); 
	$("#printText").hide(); 

}else{
	$(".ship-info").show(); 
	$(".email").hide();
	$("#printText").hide(); 
}

});


/***********END SHIPPING*******/

/**********CONFRIM ORDER*******/

//modal example based on http://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("ok");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function processForm() {
 	
 	

 	var billingName = document.forms[0].b_name;
 	var billingAdd = document.forms[0].b_street;
 	var billingCity = document.forms[0].b_city;
 	var billingProv = document.forms[0].b_prov; 
 	var billingCode = document.forms[0].b_postal; 
 	var billingPhone = document.forms[0].b_phone; 

 	var shippingName = document.forms[0].s_name; 
 	var shippingAdd = document.forms[0].s_street; 
 	var shippingCity= document.forms[0].s_city; 
 	var shippingProv = document.forms[0].s_prov; 
 	var shippingPost = document.forms[0].s_post; 
 	



 	var letterRegEx = /[a-zA-Z]$/; 
 	var addRegEx = /[0-9A-Za-z\s]/;
 	var postalRegEx = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/; 
 	var creditCardRegEx = /^\d{16}$/;
 	var cardCodeRegEx = /^\d\d\d$/;
 	var cardExpiryRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
 	var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*************CHOOSE CARD VALIDATION***********/
	var denom = document.forms[0].amount;

	if (denom.value === " " || denom.value === null){

 		denomMsg = document.getElementById("denomErr"); 
 		denomMsg.style.background = "#e0e1e3"; 
 		denomMsg.style.padding = "7px";
 		denomMsg.style.marginLeft ="20px";
 		denomMsg.style.color="black"; 
 		denomMsg.innerHTML = "Please choose a card amount";
 		denom.focus();

 		return false; 
 		 
 	}else {
 		
 		denomMsg = document.getElementById("denomErr"); 
 		denomMsg.innerHTML=""; 
 		denomMsg.style.background = "#fff";
 	}
		
/************SHIPPING VALIDATION************/
var shipDetails = document.forms[0].shipping_method;

if (shipDetails.value === "" || shipDetails.value === null){

 		shipMsg = document.getElementById("shipErr"); 
 		shipMsg.innerHTML = "Please select a shipping option";
 		shipMsg.style.background = "#e0e1e3"; 
 		shipMsg.style.padding = "7px";
 		shipMsg.style.marginLeft ="20px";
 		shipMsg.style.color="black"; 
 		shipDetails.focus();

 		return false; 

 	}else{
 			shipMsg = document.getElementById("shipErr"); 
	 		shipMsg.innerHTML=""; 
	 		shipMsg.style.background = "#fff";
 }
 	
 	

 if(shipDetails.value === "0.00"){
 	
 	var emailInput = document.forms[0].email.value;
 	var confirmInput = document.forms[0].confirmemail.value;

 	if(emailRegEx.test(emailInput) === false){

	 	emailMsg = document.getElementById("emailErr"); 
	 	emailMsg.style.background = "#e0e1e3"; 
	 	emailMsg.innerHTML = "Please enter your email";
	 	emailMsg.style.color="black"; 
	 	emailMsg.style.padding = "7px"; 
	 	emailMsg.style.marginLeft = "20px";
	 	emailInput.focus();

	 	return false; 

	 		 
 		}else{

	 		emailMsg = document.getElementById("emailErr"); 
	 		emailMsg.innerHTML=""; 
 		}
 		if(confirmInput != emailInput){

	 		confirmMsg = document.getElementById("confirmErr"); 
	 		confirmMsg.style.background = "#e0e1e3"; 
	 		confirmMsg.innerHTML = "Please confirm your email";
	 		confirmMsg.style.color="black";
	 		confirmMsg.style.padding = "7px"; 
	 		confirmMsg.style.marginLeft = "20px"; 
	 		confirmInput.focus();

	 		return false; 
 		}else{

	 		confirmMsg = document.getElementById("confirmErr"); 
	 		confirmMsg.innerHTML=""; 
 		}



 }else{ 
 		if (letterRegEx.test(shippingName.value) === false){


 		nameMsg = document.getElementById("s_nameError");  
 		nameMsg.innerHTML = "Please enter your full name.";
 		nameMsg.style.background = "#e0e1e3"; 
 		nameMsg.style.padding = "7px";
 		nameMsg.style.marginLeft ="20px";
 		nameMsg.style.color="black"; 
 		shippingName.focus();
 		 
		return false; 
 		
 		} else {
 		
 		nameMsg = document.getElementById("s_nameError");
 		nameMsg.innerHTML=""; 
 		nameMsg.style.background = "#fff";
 	}

 	

 	if (addRegEx.test(shippingAdd.value) === false){

 		streetMsg = document.getElementById("s_streetError"); 
 		streetMsg.innerHTML = "Please enter your address.";
 		streetMsg.style.background = "#e0e1e3"; 
 		streetMsg.style.padding = "7px";
 		streetMsg.style.marginLeft ="20px";
 		streetMsg.style.color="black"; 
 		shippingAdd.focus();

 		return false; 
 		

 	}else{
 		streetMsg = document.getElementById("s_streetError"); 
 		streetMsg.innerHTML=" ";
 		streetMsg.style.background = "#fff"; 
 	}

 	if (letterRegEx.test(shippingCity.value) === false){

 		cityMsg = document.getElementById("s_cityError"); 
 		cityMsg.innerHTML = "Please enter your city.";
 		cityMsg.style.background = "#e0e1e3"; 
 		cityMsg.style.padding = "7px";
 		cityMsg.style.marginLeft ="20px";
 		cityMsg.style.color="black"; 
 		shippingCity.focus();

 		return false; 

 	}else {
 		cityMsg = document.getElementById("s_cityError"); 

 		cityMsg.innerHTML="";
 		cityMsg.style.background = "#fff"; 
 	}
 		
 	if (shippingProv.value === " " || shippingProv.value === null){

 		provMsg = document.getElementById("s_provError"); 
 		provMsg.innerHTML = "Please select your province.";
 		provMsg.style.background = "#e0e1e3"; 
 		provMsg.style.padding = "7px";
 		provMsg.style.marginLeft ="20px";
 		provMsg.style.color="black"; 
 		shippingProv.focus();

 		return false; 
 		 
 	}else {
 		
 		provMsg = document.getElementById("s_provError"); 
 		provMsg.innerHTML=""; 
 		provMsg.style.background = "#fff";
 	}
		

 	if (postalRegEx.test(shippingPost.value) === false){

 		codeMsg = document.getElementById("s_postError"); 
 		codeMsg.innerHTML = "Please enter your postal code.";
 		codeMsg.style.background = "#e0e1e3"; 
 		codeMsg.style.padding = "7px";
 		codeMsg.style.marginLeft ="20px";
 		codeMsg.style.color="black"; 
 		shippingPost.focus();

 		return false; 
 		
 	}else {
 		codeMsg = document.getElementById("s_postError"); 
 		codeMsg.innerHTML=""; 
 		codeMsg.style.background = "#fff";
 	}

 		
 }

/**********BILLING VALIDATION****************/

 	if (letterRegEx.test(billingName.value) === false){


 		nameMsg = document.getElementById("nameErr");  
 		nameMsg.innerHTML = "Please enter your full name.";
 		nameMsg.style.background = "#e0e1e3"; 
 		nameMsg.style.padding = "7px";
 		nameMsg.style.marginLeft ="20px";
 		nameMsg.style.color="black"; 
 		billingName.focus();
 		 
		return false; 
 		
 		} else {
 		
 		nameMsg = document.getElementById("nameErr");
 		nameMsg.innerHTML=""; 
 		nameMsg.style.background = "#fff";
 	}

 	

 	if (addRegEx.test(billingAdd.value) === false){

 		streetMsg = document.getElementById("streetErr"); 
 		streetMsg.innerHTML = "Please enter your address.";
 		streetMsg.style.background = "#e0e1e3"; 
 		streetMsg.style.padding = "7px";
 		streetMsg.style.marginLeft ="20px";
 		streetMsg.style.color="black"; 
 		billingAdd.focus();

 		return false; 
 		

 	}else{
 		streetMsg = document.getElementById("streetErr"); 
 		streetMsg.innerHTML=" ";
 		streetMsg.style.background = "#fff"; 
 	}

 	if (letterRegEx.test(billingCity.value) === false){

 		cityMsg = document.getElementById("cityErr"); 
 		cityMsg.innerHTML = "Please enter your city.";
 		cityMsg.style.background = "#e0e1e3"; 
 		cityMsg.style.padding = "7px";
 		cityMsg.style.marginLeft ="20px";
 		cityMsg.style.color="black"; 
 		billingCity.focus();

 		return false; 

 	}else {
 		cityMsg = document.getElementById("cityErr"); 

 		cityMsg.innerHTML="";
 		cityMsg.style.background = "#fff"; 
 	}
 		
 	if (billingProv.value === " " || billingProv.value === null){

 		provMsg = document.getElementById("provErr"); 
 		provMsg.innerHTML = "Please select your province.";
 		provMsg.style.background = "#e0e1e3"; 
 		provMsg.style.padding = "7px";
 		provMsg.style.marginLeft ="20px";
 		provMsg.style.color="black"; 
 		billingProv.focus();

 		return false; 
 		 
 	}else {
 		
 		provMsg = document.getElementById("provErr"); 
 		provMsg.innerHTML=""; 
 		provMsg.style.background = "#fff";
 	}
		

 	if (postalRegEx.test(billingCode.value) === false){

 		codeMsg = document.getElementById("postalErr"); 
 		codeMsg.innerHTML = "Please enter your postal code.";
 		codeMsg.style.background = "#e0e1e3"; 
 		codeMsg.style.padding = "7px";
 		codeMsg.style.marginLeft ="20px";
 		codeMsg.style.color="black"; 
 		billingCode.focus();

 		return false; 
 		
 	}else {
 		codeMsg = document.getElementById("postalErr"); 
 		codeMsg.innerHTML=""; 
 		codeMsg.style.background = "#fff";
 	}

 	
 	/*********PAYMENT VALIDATION*******/

 	var cardName = document.forms[0].p_name; 
 	var cardType = document.forms[0].p_cardtype;
 	var cardNum = document.forms[0].p_cardnumber;
 	var cardExp = document.forms[0].p_expiry;
 	var cardCode = document.forms[0].p_security;  

 	if (letterRegEx.test(cardName.value) === false){


 		c_nameMsg = document.getElementById("c_nameErr");  
 		c_nameMsg.innerHTML = "Please enter the name on card";
 		c_nameMsg.style.background = "#e0e1e3"; 
 		c_nameMsg.style.padding = "7px";
 		c_nameMsg.style.marginLeft ="20px";
 		c_nameMsg.style.color="black"; 
 		cardName.focus();
 		 
		return false; 
 		
 		} else {
 		
 		c_nameMsg = document.getElementById("c_nameErr");
 		c_nameMsg.innerHTML=""; 
 		c_nameMsg.style.background = "#fff";
 	}

 	if (cardType.value === " " || cardType.value === null){

 		typeMsg = document.getElementById("typeErr"); 
 		typeMsg.innerHTML = "Please select the card type";
 		typeMsg.style.background = "#e0e1e3"; 
 		typeMsg.style.padding = "7px";
 		typeMsg.style.marginLeft ="20px";
 		typeMsg.style.color="black"; 
 		cardType.focus();

 		return false; 
 		 
 	}else {
 		
 		typeMsg = document.getElementById("typeErr"); 
 		typeMsg.innerHTML=""; 
 		typeMsg.style.background = "#fff";
 	}

	if (creditCardRegEx.test(cardNum.value) === false){


 		c_numMsg = document.getElementById("c_numErr"); 
 		c_numMsg.innerHTML = "Please enter your card number (no spaces)";
 		c_numMsg.style.background = "#e0e1e3"; 
 		c_numMsg.style.padding = "7px";
 		c_numMsg.style.marginLeft ="20px";
 		c_numMsg.style.color="black"; 
 		cardNum.focus();
 		 
		return false; 
 		
 		} else {
 		
 		c_numMsg = document.getElementById("c_numErr");
 		c_numMsg.innerHTML=""; 
 		c_numMsg.style.background = "#fff";
 	}

 	if (cardExpiryRegEx.test(cardExp.value) === false){


 		c_expMsg = document.getElementById("c_expErr"); 
 		c_expMsg.innerHTML = "Please enter the expiry date (eg 02/2016)";
 		c_expMsg.style.background = "#e0e1e3"; 
 		c_expMsg.style.padding = "7px";
 		c_expMsg.style.marginLeft ="20px";
 		c_expMsg.style.color="black";  
 		cardExp.focus();
 		 
		return false; 
 		
 		} else {
 		
 		c_expMsg = document.getElementById("c_expErr");
 		c_expMsg.innerHTML=""; 
 		c_expMsg.style.background = "#fff";
 	}


	if (cardCodeRegEx.test(cardCode.value) === false){


 		c_codeMsg = document.getElementById("c_codeErr"); 
 		c_codeMsg.innerHTML = "Please enter the 3 digit security code";
 		c_codeMsg.style.background = "#e0e1e3"; 
 		c_codeMsg.style.padding = "7px";
 		c_codeMsg.style.marginLeft ="20px";
 		c_codeMsg.style.color="black";  
 		cardCode.focus();
 		 
		return false; 
 		
 		} else {
 		
 		c_codeMsg = document.getElementById("c_codeErr");
 		c_codeMsg.innerHTML=""; 
 		c_codeMsg.style.background = "#fff";
 	}




/***********CONFIRMATION WINDOW***************/
    modal.style.display = "block";
    if(flag === true) {
    	var pTo = $("#toname").val(); 
    	var pFrom = $("#fromname").val();
		 	var pMessage = $("#cardmessage").val(); 
			console.log(pTo);
			console.log(pFrom);
			console.log(pMessage); 
		 	$("#to").html("To: "+ pTo); 
		 	$("#from").html("From: " + pFrom); 
		 	$("#message").html("Message: " + pMessage); 
    }
    else { 
    	$(".p_card").hide(); 
    	pTo = null; 
    	pFrom = null; 
    	pMessage = null; 
    	

    }


    
} //end process form


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#go_back").click(function(){

	$(modal).hide();

});



$("#shipping_method").change(function(){


var shipOption = $("#shipping_method").val();

if (shipOption === "0.00" || shipOption === "") {
	$("#ship-cost").html("Shipping: $0.00");

} else if (shipOption === "7.50") {
	$("#ship-cost").html("Shipping: $7.00");

}else{

	$("#ship-cost").html("Shipping: $22.00");

}

});


/**********CARDS CONFIRM*************/

$("#amount").change(function(){

	var cardOption = $("#amount").val(); 

	if (cardOption === "25") {

		$("#card_amount").html("Card Amount: $25.00");

	}else if(cardOption === "50") {

		$("#card_amount").html("Card Amount: $50.00");

	}else{

		$("#card_amount").html("Card Amount: $100.00"); 
	}
 

});

 

 

	 $("#p_option").change(function(){

	 		var test = $('input[name=yesno]:checked').val();
	console.log(test); 


	
	
	
	});

	

	

$(".total").change(function() {

	var value = parseInt($("#amount").val())

	var shippingCost = parseInt($("#shipping_method").val()) 

	var totalCost = value + shippingCost; 


	$("#order_total").html("Order Total: $" + totalCost + ".00"); 

});
/***********END CARDS****************/


/*********SHIPPING CONFIRM***********/

$("#shipping").change(function(){


var userEmail = $("#s_email").val();
var userEmailConfirm = $("#s_confirmemail").val();
var userName = $("#s_name").val(); 
var userAdd = $("#s_street").val(); 
var userCity = $("#s_city").val(); 
var userProv = $("#s_prov").val(); 
var userPost = $("#s_post").val(); 
var shipOption = $("#shipping_method").val();

if (shipOption === "0.00") {

$("#s-email").html("Email: " +  userEmail); 

$("#s-confirmemail").html("Confirm Email: " + userEmailConfirm);

$("#s-name").hide(); 
$("#s-street").hide(); 
$("#s-city").hide(); 
$("#s-prov").hide(); 
$("#s-post").hide(); 

} else if (shipOption === "") {
	$(".ship-info").hide(); 
	$(".email").hide(); 
	$("#printText").hide(); 

}else{
	$("#s-name").html("Full Name: " + userName); 
	$("#s-street").html("Street Address: " + userAdd);
	$("#s-city").html("City: " + userCity); 
	$("#s-prov").html("Province: " + userProv);  
	$("#s-post").html("Postal Code: " + userPost); 

	$("#s-email").hide(); 
	$("#s-confirmemail").hide(); 
}

});


/********BILLING CONFIRM*************/


$("#billing").change(function(){


var userName = $("#b_name").val(); 
$("#b-name").html("Full Name: " + userName); 


var userBillAdd = $("#b_street").val(); 
$("#b-street").html("Street Address: " + userBillAdd); 



var userCity = $("#b_city").val(); 
$("#b-city").html("City: " + userCity); 



var userProv = $("#b_prov").val(); 
$("#b-prov").html("Province: " + userProv); 



var userPost = $("#b_post").val(); 
$("#b-post").html("Postal Code: " + userPost); 


var userPhone = $("#b_phone").val(); 
$("#b-phone").html("Phone: " + userPhone); 


});

/***********PAYMENT CONFIRM************/

$("#payment").change(function(){


var userName = $("#p_name").val(); 
$("#p-name").html("Full Name: " + userName); 


var userCard = $("#p_type").val(); 
$("#p-type").html("Card Type: " + userCard); 


var userNum = $("#p_number").val(); 
$("#p-number").html("Card Number: " + userNum); 



var userExp = $("#p_exp").val(); 
$("#p-exp").html("Expiry: " + userExp); 



var userCode = $("#p_code").val(); 
$("#p-code").html("Security Code: " + userCode); 



});








});




