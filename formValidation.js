//Peform form validation
function checkFormValues(){
		var inputsValid = true;
		
		
		//Check the code
		var isCodeValid = validateCode();

		if(!isCodeValid)
		{
			alert("Code is invalid");
			return false;
		}
		
		
		
		//Check the Main Guest input field
		var nameForm= document.forms["guestForm"]["main_guest"];
		var value = nameForm.value.trim();
		if(!value)
		{
			alert("Name field cannot be empty");
			inputsValid = false;
			return inputsValid;
		}

		//Make sure if any additional guests are coming, form is filled out
		var guestBox = document.getElementById("guest_checkbox");
		if(guestBox.checked)
		{
			var guestInputs = document.forms["guestForm"];
			var guestDiv = document.getElementById("guest_input");
			//Checks for which state the guest_input div is in. 
			if(guestDiv.getAttribute("data-state")==="blank")
			{
				alert("Please enter guest names");
			}
			else
			{
				var guests = guestInputs["guests[]"];
				//For each guest input, check if it is empty. Return if as soon as an empty input is found.
				for(i=0; i<guests.length; i++)
				{
					var input = guests[i];
					var value = input.value.trim();
					if(!value)
					{
						alert("Guest names cannot be empty");
						inputsValid = false;
						return inputsValid;
					}
				}
			}
		}	

		return inputsValid;
}

//Make sure the code exists in the database
function validateCode(){

	var code = document.forms["guestForm"]["code"].value.trim();
	var xmlhttp;

	if (window.XMLHttpRequest)
	{// for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}
	else
	{// for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	//This function allows for the border color to change asynchronously
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status == 200)
		{
			var rsvpButton = document.getElementById("rsvp_button");
			//If code is valid allow for rsvp
			//alert(xmlhttp.responseText);
			if(xmlhttp.responseText === "true")
			{
				rsvpButton.disabled = false;
				rsvpButton.className = "myButtons";

				//Cause animation
				changeCodeBorder("green");
				return true;
			}
			else
			{
				changeCodeBorder("red");
				return false;
			}
				
		}
	}

	xmlhttp.open("GET", "checkCode.php?code=" + code, true);
	xmlhttp.send();

	//return true;
}

function changeCodeBorder(color)
{
	document.getElementById("code").style.borderColor=color;
}

//Cause animation: Note that setTimeout() does not delay execution of this function.
function animateCodeBorder(color)
{
	changeCodeBorder(color);
	window.setTimeout(function(){changeCodeBorder("initial")}, 250);
	window.setTimeout(function(){changeCodeBorder(color)}, 500);
	window.setTimeout(function(){changeCodeBorder("initial")}, 750);
	
}

function changeClass()
{
	var rsvpButton = document.getElementById("rsvp_button");
	rsvpButton.disabled = false;
	rsvpButton.className = "myButtons";
}