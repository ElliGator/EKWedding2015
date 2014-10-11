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

	var rsvpButton = document.getElementById("rsvp_button");

	//Do not allow rsvp if the code is still being checked.
	rsvpButton.setAttribute("disabled", "disabled");

	//This function allows for the border color to change asynchronously
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status == 200)
		{
			//alert(xmlhttp.responseText);
			if(xmlhttp.responseText === "true")
			{
				
				rsvpButton.className = "myButtons";

				//Cause animation
				changeCodeBorder("green");
				sessionStorage.setItem("isCodeValid", "true");
			}
			else
			{
				changeCodeBorder("red");
				sessionStorage.setItem("isCodeValid", "false");
			}
		}
		rsvpButton.removeAttribute("disabled");
	}

	try{

		xmlhttp.open("GET", "ceckCode.php?code=" + code, true);
		xmlhttp.send();
	}
	catch(err)
	{
		//Re-enable the rsvp button if ajax request won't work
		alert(rsvpButton.disabled);
	}
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
