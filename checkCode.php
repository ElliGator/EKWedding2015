#!/usr/local/bin/php
<?
	
	$con_string = " ";

	//connection settings go here 
	$dbconn = pg_connect($con_string);

	$usr_code = $_GET['code'];
	$checkcode = "SELECT code FROM codes WHERE code LIKE '$usr_code'";

	$code_valid = pg_num_rows(pg_query($checkcode));


	if($code_valid > 0)
		echo 'true';
	else 
		echo 'false';
?>
