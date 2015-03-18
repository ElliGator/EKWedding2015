#!/usr/local/bin/php
<?php
	
	$con_string = ""

	//connection settings go here
	//$dbconn = pg_connect($con_string);
	
	//Test Connection
	if(pgsql_connect_errno()){
		echo "Failed to connect to PostGreSQL: " . pgsql_connect_error();
	}

	
	//Receive form values, guests is an array
	$gst_code = $_GET['code'];
	$gst_leader = $_POST['main_guest'];

	//Insert guest leader into db
	$sql_gst_leader = "INSERT INTO guests VALUES ($gst_code, '$gst_leader', '$gst_leader')" ;
	//$leader_result = pg_query($sql_gst_leader);
	echo "Leader: ".$sql_gst_leader;


	if(isset($_POST['guests']))
	{
		$guests = $_POST['guests']);

		//Iterate through guests array and insert into db
		$sql_gst = "INSERT INTO guests VALUES";
		foreach (($guests as $x)) {
			$sql_gst .= "('$gst_code', '$gst_leader', '$x'),";
		}
		$sql_gst = rtrim($sql_gst,",");
		$sql_gst .= ";";
		//$guests_result = pg_query($sql_gst);
		echo "Guests: ".$sql_gst;
	}

	
?>