#!\usr\local\bin\php
<?php
	/*What I want: 
		1. When form is submitted I want to check the code for to make sure it exists in the db
		2. Insert the party leader and his/her guests into guestlist to keep count of how many people
			are coming
	*/

	//connection settings go here
	$dbconn = pg_connect($con_string);
	
	//Test Connection
	if(pgsql_connect_errno()){
		echo "Failed to connect to PostGreSQL: " . pgsql_connect_error();
	}

	
	//Receive form values, guests is an array
	$gst_code = pg_escape_string($_GET['code']);
	$gst_leader = pg_escape_string($_POST['main_guest']);
	$guests = pg_escape_string($_POST['guests']);

	//Insert guest leader into db
	$sql_gst_leader = "INSERT INTO guestlist VALUES ('$gst_leader ', '$gst_code', 'T')";
	$result1 = pg_query($sql_gst_leader);

	
	//Iterate through guests array and insert into db
	$sql_gst = "INSERT INTO guestlist VALUES";
	foreach (($guests as $x) && (count($guests)-1)) {
		$sql_gst .= "('$x', '$gst_code', 'F'),";
	}
	$sql_gst = rtrim($sql_gst,",");
	$sql_gst .= ";";
	$result2 = pg_query($sql_gst);
	
	//Query total amount of people who have RSVPed
	$rsvp_tot = pgsql_query($con, "SELECT count(*) FROM guestlist");
	echo "$rsvp_tot";
	pg_close($dbconn);
?>