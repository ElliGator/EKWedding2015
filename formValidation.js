//Peform form validation
function checkFormValues(){
		var inputsValid = true;
		
		
		//Check the code
		var isCodeValid = sessionStorage.getItem("isCodeValid");

		if(isCodeValid === "false")
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

