#!/usr/local/bin/php
<?php
	
	$con_string = " ";

	//connection settings go here
	$dbconn = pg_connect($con_string);
	
	//Receive form values, guests is an array
	$gst_code = $_POST['code'];
	$gst_leader = $_POST['main_guest'];

	//Check if code has already been used by someone else
	$check_query = "SELECT checkIfCodeUsed('$gst_leader', '$gst_code');";
	$check_result = pg_query($check_query);
	$row = pg_fetch_row($check_result);
	$codeIsUsed = $row[0];

	//If the code is not valid, don't execute anything and display message
	if($codeIsUsed == 1)
	{
		echo 'Code has already been used or is invalid';
		return;
	}

	//Delete any current data with the code the code
	$del_query = "DELETE FROM guests WHERE code LIKE '$gst_code'";
	$del_success = pg_query($del_query);

	//Error handling
	if($del_success == FALSE)
	{
		echo 'Unable to update RSVP!';
		return;
	}


	//Insert guest leader into db
	$sql_gst_leader = "INSERT INTO guests VALUES ('$gst_code', '$gst_leader', '$gst_leader');" ;
	$leader_success = pg_query($sql_gst_leader);
	//echo "Leader: ".$sql_gst_leader;

	//Error handling
	if($leader_success == FALSE)
	{
		echo 'Unable to update RSVP!';
		return;
	}

	if(isset($_POST['guests']))
	{
		$guests = $_POST['guests'];

		//Iterate through guests array and insert into db
		$sql_gst = "INSERT INTO guests VALUES";
		foreach ($guests as $x) {
			$sql_gst .= "('$gst_code', '$gst_leader', '$x'),";
		}
		$sql_gst = rtrim($sql_gst,",");
		$sql_gst .= ";";
		$guests_success = pg_query($sql_gst);
		//echo "Guests: ".$sql_gst;

		//Error handling
		if($guests_success == FALSE)
		{
			echo 'Unable to add your guests! Please try again!';
			return;
		}
	}
?>
