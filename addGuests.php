#!/usr/local/bin/php
<?php
	
	$con_string = "host=postgres.cise.ufl.edu port=5432 dbname=ekweddb user=ec1 password=SQLpassword12";

	//connection settings go here
	$dbconn = pg_connect($con_string);
	
	//Receive form values, guests is an array
	$gst_code = $_POST['code'];
	$gst_leader = $_POST['main_guest'];

	//Delete any current data with the code the code
	$del_query = "DELETE FROM guests WHERE code LIKE '$gst_code'"
	$del_success = pg_query($del_query);


	//Insert guest leader into db
	$sql_gst_leader = "INSERT INTO guests VALUES ('$gst_code', '$gst_leader', '$gst_leader');" ;
	$leader_success = pg_query($sql_gst_leader);
	//echo "Leader: ".$sql_gst_leader;


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
	}
?>
