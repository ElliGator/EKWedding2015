
//Removes the fields which allow guest names to be entered
function removeGuestinputs(){
		var newHTML = "";
		var guestDiv = document.getElementById("guest_input");
		guestDiv.setAttribute("data-state","blank");
		guestDiv.innerHTML =  newHTML;

		//Show num guest input
		document.getElementById("guest_num_input").style.visibility="visible";
	}

//Shows the fields which allow guest names to be entered
function displayGuestInputs() {
	    var num = document.getElementById("extras").value.trim();
	    //Only allow input if the number is in the range 1-7
	    if(num <= 7 && num > 0 && num !== "")
	    {
		    var newHTML ="";
		    
		    //Create the new html to allow for guest name input
		    for(i = 0; i < num; i++)
		     {
		       newHTML = newHTML + "<br>Guest Name: <input type=\"text\" class=\"inputs\" name=\"guests[]\" placeholder=\"Enter Full Name\"><br>";
		     }
		    newHTML= newHTML + "<br><button class=\"myButtons\" onclick=\"removeGuestinputs()\">Change # of Guests</button>";
		   
		    //Assign the new html to the guestDiv 
		    var guestDiv = document.getElementById("guest_input");
			guestDiv.setAttribute("data-state","fields");
			guestDiv.innerHTML =  newHTML;

			//Hide num guest input
			document.getElementById("guest_num_input").style.visibility="hidden";
		}
		else
			alert("Invalid number of guests. Enter 1-7");
	}

//Handles whether or not guest information should be displayed
function handleGuestCheckbox(checkbox){
		if(checkbox.checked == true)
		{
			document.getElementById("guest_num_input").style.visibility="visible";
			document.getElementById("guest_input").style.visibility="visible";
		}
		else
		{
			document.getElementById("guest_num_input").style.visibility="hidden";
			document.getElementById("guest_input").style.visibility="hidden";
		}
	}